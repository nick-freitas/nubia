import {
  AuthorizedUser,
  Chapter,
  Gamebook,
  Progression,
} from "@indigobit/nubia.common";
import jwt_decode from "jwt-decode";
import axios from "axios";
import * as config from "./config.json";

const http = axios.create({
  baseURL: "http://nubia.dev/api",
  headers: {
    "Content-type": "application/json",
  },
});

// https://www.plot-generator.org.uk/
async function main() {
  // Register the main admin user
  await http.post(`/register`, {
    email: config.admin.email,
    fullName: config.admin.fullName,
    password: config.registerPasswords,
  });

  config.users.forEach(async (user: any) => {
    // Register the defined users
    const { access_token, id: adminUserId } = (
      await http.post<AuthorizedUser>(
        `/register`,
        {
          email: user.email,
          fullName: user.fullName,
          password: config.registerPasswords,
        },
        { withCredentials: true }
      )
    ).data;

    console.log(access_token, adminUserId);
    return;

    user.gamebooksToCreate.forEach(async (gamebook) => {
      // Create each of their authored gamebooks
      const { id: gamebookId } = (
        await http.post<Gamebook>(`/gamebooks`, {
          title: gamebook.title,
          description: gamebook.description,
          authorId: jwt_decode(access_token),
          imageSrc: gamebook.imageSrc,
          price: gamebook.price,
        })
      ).data;

      // Get that gamebook back
      const { id, title, version, authorId } = (
        await http.post<Gamebook>(`/gamebooks/${gamebookId}`, {
          title: gamebook.title,
          description: gamebook.description,
          authorId: jwt_decode(access_token),
          imageSrc: gamebook.imageSrc,
          price: gamebook.price,
        })
      ).data;

      const chapterIds = [];
      for (let i = 0; i < gamebook.chapters.length; i++) {
        const chapter = gamebook.chapters[i];
        // create each of the chapters
        const { id, title } = (
          await http.post<Chapter>(`/gamebooks/${gamebookId}/chapters`, {
            title: chapter.title,
            content: chapter.content,
            isStartingChapter: i === 0,
            isEndingChapter: i === gamebook.chapters.length,
          })
        ).data;
        chapterIds[i] = id;

        if (i > 1) {
          // and create a progression from the previous chapter to this chapter
          const { id } = (
            await http.post<Progression>(
              `/gamebooks/${gamebookId}/progressions`,
              {
                name: `GOTO_${title.replace("/ /g", "_").toUpperCase()}`,
                descriptor: `Continue to ${title}`,
                sourceChapterId: chapterIds[i - i],
                destinationChapterId: chapterIds[i],
              }
            )
          ).data;
        }
      }

      // Get all gamebooks for that user?
      // todo
    });
  });

  // Login as admin
  // todo

  // Get all gamebooks
  // todo

  // Log out
  // todo

  // Log in as user 1
  // todo

  // Get the choices in the current reading session
  // todo

  // Make 2 choices
  // todo

  // Undo 1 of the choices
  // todo

  // Make remaining choices until the end
  // todo

  // Undo all choices
  // todo
}

main()
  .then(() => console.info("Complete"))
  .catch((err) => console.error(err));
