# DanceSafe Kiosk

A kiosk for DanceSafe harmreduction information

### Get Started
- **Clone this repository or use npm**
```bash
$ git clone https://github.com/drakeltheryuujin/NYDanceSafe-Kiosk
```

- **Install dependencies specified in package.json**  
```bash
# npm
$ npm install
```
- **Start the server (default port is set to 3001)**
```bash
# npm
$ npm start
```
### Enable Node Autostart
'Enabling autostart' means to make the OS run a certain command at logon of the user who 'enabled the autostart' via a program:
```
  autostart enable -n "DanceSafeKiosk" -p /home/me/kiosk-loopback -c "npm start"
```
to enable,
```
  autostart check -n "DanceSafeKiosk"
```
to see if it is enabled, and:
```
  autostart disable -n "DanceSafeKiosk"
```
to disable it.

### Scripts
- **npm run clean** or **yarn clean**: Removes the bundled files.

Enable node-autostart

