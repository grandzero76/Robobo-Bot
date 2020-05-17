const Discord = require('discord.js'); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
// 만약에 클라이언트가 준비되었다면, 아래의 코드를 실행함
// 이 이벤트는 봇이 로그인 되고 한번만 실행됨
client.once('ready', () => {
    console.log("로보보 작동개시");
});

// 명령어 시작

client.on('message', message => {
    if (message.content === "!카페") {
        // 카페링크를 알려줌
        message.channel.send("https://cafe.naver.com/krfa18");
    }

    if (message.content === "!오픈날짜") {
        // 카페링크를 알려줌
        message.channel.send("5월말 (오픈 1주일전에 공지가 올라옵니다)");
    }

    if (message.content === "!봇 버전") {
        // 봇 버전을 알려줌
        message.channel.send("ALPHA VERSION");
    }

    if (message.content === "!봇 제작자") {
        // 봇 버전을 알려줌
        message.channel.send("밥태영 (원자력)");
    }

    if(message.author.bot) return;
    
    if (message.content.startsWith('!clear')) {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			return message.channel.send(`<@${message.author.id}> ` + "관리자 권한 부족, 관리자에게 문의하십시오.")
		};
		var clear = message.content.substring(7)
			if (!clear) {
				return message.channel.send("숫자를 입력해주세요.")
			}
			if (clear > 100) {
				message.channel.send("1부터 100까지만 입력해주세요.")
				return;
			}
			if (clear < 1) {
				message.channel.send("1부터 100까지만 입력해주세요.")
				return;
			}
			if (isNaN(clear) == true) {
				message.channel.send("숫자만 입력해주세요.")
			} else {
				message.channel.bulkDelete(clear)
				.then(() => message.channel.send(`${clear}개의 메세지를 삭제했습니다.`))
				.catch(console.error)
			}
    }
});

// 명령어 끝

// 디스코드 토큰 입력
client.login('NzExNDM1MzcyNzAxNDE3NDky.XsC-qw.ULxxo6i0RqgHCKp5XnEaec8XmNI')