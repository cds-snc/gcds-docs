FROM public.ecr.aws/docker/library/node:20-slim@sha256:d6e4ec9eaf2390129b5d23904d07ae03ef744818386bcab3fc45fe63405b5eb2
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.0@sha256:1c31bf4102ca63ef2082534d7139c0bc5fbd36ea6648e4756e9b475ef3ed829c /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]