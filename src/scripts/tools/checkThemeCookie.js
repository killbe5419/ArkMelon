export default function checkThemeCookie() {
    if(document.cookie.length === 0) {
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "dark-theme";
    } else {
        let cookieArr = document.cookie.split(";");
        for(let i=0;i<cookieArr.length;i++) {
            if(cookieArr[i].split("=")[0].trim() === "theme") {
                return cookieArr[i].split("=")[1];
            }
        }
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "dark-theme";
    }
}