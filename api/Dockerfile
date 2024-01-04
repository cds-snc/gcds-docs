FROM public.ecr.aws/docker/library/node:20-slim@sha256:5c714c3e90f66a2cbfa266b90a4d7adcd63453cd730aa2d13cba84b260bea2e6
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.1@sha256:97c8f81e19e64841df0882d3b3c943db964c554992c1bac26100f1d6c41ea0bb /lambda-adapter /opt/extensions/lambda-adapter

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