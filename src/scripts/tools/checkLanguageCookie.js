export default function checkLanguageCookie () {
    if(document.cookie.length === 0) {
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "zh-cn";
    } else {
        const cookieArr = document.cookie.split(";");
        for(let i=0;i<cookieArr.length;i++) {
            if(cookieArr[i].split("=")[0].trim() === "language") {
                return cookieArr[i].split("=")[1];
            }
        }
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "zh-cn";
    }
}