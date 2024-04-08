FROM public.ecr.aws/docker/library/node:20-slim@sha256:b952b58c5aaf0b46510f8789a3a710515bb1b881963e1b9c6b7917b323911999
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.1@sha256:330e3bd51eb8ee18a1aa0e77690d1e59fed9c138167af96d63d1710d039c8ae3 /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]