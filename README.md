# Nubia Gamebooks

## Services
[nubia.api-gateway](https://github.com/nick-freitas/nubia.api-gateway)

[nubia.auth](https://github.com/nick-freitas/nubia.auth)

[nubia.gamebook](https://github.com/nick-freitas/nubia.gamebook)

[nubia.chapter](https://github.com/nick-freitas/nubia.chapter)

[nubia.reading-session](https://github.com/nick-freitas/nubia.reading-session)

[nubia.library](https://github.com/nick-freitas/nubia.library)

[nubia.common](https://github.com/nick-freitas/nubia.common)


* JWT Secret Key

```
kubectl create secret generic jwt-secret --from-literal=JWT_SECRET_KEY=FAKE_SECRET_KEY
``` 

* Install Dashboard

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml
```

* Genereate Bearer Toekn for Dashboard

```
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

* kafka ui

```
docker run -p 8080:8080 -e KAFKA_CLUSTERS_0_NAME=local -e KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=kafka.nubia.dev -e KAFKA_CLUSTERS_0_ZOOKEEPER=zookeeper.nubia.dev -d provectuslabs/kafka-ui:latest

Then access the web UI at http://localhost:8080

docker run -it -p 9000:9000 -e KAFKA_BROKERCONNECT= obsidiandynamics/kafdrop

docker run  -it -p 9000:9000 -e KAFKA_BROKERCONNECT=kafka-service:9092 -e JVM_OPTS="-Xms32M -Xmx64M" -e SERVER_SERVLET_CONTEXTPATH="/" obsidiandynamics/kafdrop

When it starts, open your browser to localhost:9000
```
