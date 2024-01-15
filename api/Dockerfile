FROM public.ecr.aws/docker/library/node:20-slim@sha256:2f451571a2e424b7aed654ca404331bf1ebf1ae3b4794bef0618d123d7a670e4
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.2@sha256:2371ccb317400f534f5101141e852f3dade2433f3f13c704a25a3cda46997d37 /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

RUN apt-get update && apt-get install -y \
    awscli

COPY bin/entry.sh ./entry.sh

RUN chmod +x ./entry.sh
CMD exec ./entry.sh