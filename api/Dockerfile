FROM public.ecr.aws/docker/library/node:20-slim@sha256:d6e4ec9eaf2390129b5d23904d07ae03ef744818386bcab3fc45fe63405b5eb2
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4@sha256:e2653f741cd15851ba4f13f3cc47d29f2d14377c7d11737bfa272baa1b569007 /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]