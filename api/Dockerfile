FROM public.ecr.aws/docker/library/node:20-slim@sha256:9f938a1eeb3f85ca7691e1b4b5e9ab91e1d2efa7afc1d3e495b6f8158b7e2d39
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.2@sha256:5486878be7cc93f48a39b26ef8fdd20e9ddc1f4622b4aa90e06aead98568638d /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]