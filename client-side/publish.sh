PROJECT_NAME="messaging-stomp-websocket"

ng build --prod --aot
surge -p ./dist/client-side/ -d "${PROJECT_NAME}.surge.sh"

echo ""
echo ""
echo "publish client-side completed: http://${PROJECT_NAME}.surge.sh"
