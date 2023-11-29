FROM public.ecr.aws/docker/library/node:20-slim

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev
CMD ["node", "index.js"]