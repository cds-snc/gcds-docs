FROM public.ecr.aws/docker/library/node:20-slim@sha256:5e8ac65a0231d76a388683d07ca36a9769ab019a85d85169fe28e206f7a3208e
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.3@sha256:f312209a538c102bcc112b99edf9b989140658a5f8d0c98d9a0c7ce12512e76a /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]