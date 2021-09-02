# Nubia Gamebooks

## Repos
### Clients
[nubia.web-reader](https://github.com/nick-freitas/nubia.web-reader)

[nubia.web-editor](https://github.com/nick-freitas/nubia.web-editor)

nubia.store

### Services
[nubia.api-gateway](https://github.com/nick-freitas/nubia.api-gateway)

[nubia.auth](https://github.com/nick-freitas/nubia.auth)

[nubia.gamebook](https://github.com/nick-freitas/nubia.gamebook)

[nubia.chapter](https://github.com/nick-freitas/nubia.chapter)

[nubia.progression](https://github.com/nick-freitas/nubia.progression)

[nubia.reading-session](https://github.com/nick-freitas/nubia.reading-session)

[nubia.library](https://github.com/nick-freitas/nubia.library)

### Common
[nubia.common](https://github.com/nick-freitas/nubia.common)


## Dev Notes

### k8s
* JWT Secret Key

```
kubectl create secret generic jwt-secret --from-literal=JWT_SECRET_KEY=FAKE_SECRET_KEY
``` 

* Ingress Nginx

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.0/deploy/static/provider/cloud/deploy.yaml
```

* Install Dashboard

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml
```

* Genereate Bearer Toekn for Dashboard

```
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

