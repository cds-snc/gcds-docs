FROM public.ecr.aws/docker/library/node:20-slim
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.1 /lambda-adapter /opt/extensions/lambda-adapter

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