FROM public.ecr.aws/docker/library/node:20-slim@sha256:357deca6eb61149534d32faaf5e4b2e4fa3549c2be610ee1019bf340ea8c51ec
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.1@sha256:330e3bd51eb8ee18a1aa0e77690d1e59fed9c138167af96d63d1710d039c8ae3 /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]