FROM public.ecr.aws/docker/library/node:20-slim@sha256:a22f79e64de59efd3533828aecc9817bfdc1cd37dde598aa27d6065e7b1f0abc
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.3@sha256:f312209a538c102bcc112b99edf9b989140658a5f8d0c98d9a0c7ce12512e76a /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]