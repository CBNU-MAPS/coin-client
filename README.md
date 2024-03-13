<center>
<h1> 📌 COIN / 코인 </h1>

<img src="" alt="소개 사진">

[<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Coin.png" alt="Coin" width="14" height="14" /> COIN 바로가기](https://coin-bingo.vercel.app/)

</center>

# 프로젝트 소개

- COIN은 관심사 공유가 필요한 자리에서 언제든지 즐길 수 있는 빙고 게임입니다.
- 빙고 이름, 최대 인원 수, 빙고판의 크기를 정해서 빙고를 생성할 수 있을 수 있습니다.
- 링크 공유를 통해 빙고 게임에 참여하여 자신의 닉네임과 아바타를 정할 수 있습니다.
- 관심사 질문에 대한 대답으로 빙고칸을 채우고, 모두 채우면 준비 완료 버튼이 나타납니다.
- 참여 인원 모두 준비 완료되면 게임이 시작됩니다.
- 자신의 차례가 되면 빙고칸을 선택할 수 있으며, 3/4/5개의 빙고가 나오면 게임이 종료됩니다.
- 빙고 진행 중에는 빙고현황판을 통해 빙고 진행 상황을 확인할 수 있습니다. (다른 사람의 선택을 함께 확인할 수 있습니다.)
- 결과페이지를 통해 자신의 관심사를 다른 사람들과 공유해보세요!

# 🗂️ Project Structure / 프로젝트 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜createRoom.js
 ┃ ┗ 📜getBingoState.js
 ┣ 📂assets
 ┃ ┗ 📂font
 ┃ ┃ ┣ 📜Pretendard-Bold.woff
 ┃ ┃ ┗ 📜Pretendard-Medium.woff
 ┣ 📂components
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┗ 📜Button.module.scss
 ┃ ┗ 📂Spinner
 ┃ ┃ ┣ 📜Spinner.jsx
 ┃ ┃ ┗ 📜Spinner.module.scss
 ┣ 📂Icons
 ┃ ┣ 📜CoinIcon.jsx
 ┃ ┣ 📜InaccessIcon.jsx
 ┃ ┣ 📜LinkCopyIcon.jsx
 ┃ ┣ 📜MinusIcon.jsx
 ┃ ┣ 📜NextIcon.jsx
 ┃ ┣ 📜NotFoundIcon.jsx
 ┃ ┣ 📜PlusIcon.jsx
 ┃ ┗ 📜PrevIcon.jsx
 ┣ 📂pages
 ┃ ┣ 📂Bingo
 ┃ ┃ ┣ 📂BingoBoard
 ┃ ┃ ┃ ┣ 📂QuestionModal
 ┃ ┃ ┃ ┃ ┣ 📂InputModal
 ┃ ┃ ┃ ┃ ┃ ┣ 📜InputModal.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜InputModal.module.scss
 ┃ ┃ ┃ ┃ ┣ 📂SelectModal
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SelectModal.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SelectModal.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜QuestionModalOverlay.jsx
 ┃ ┃ ┃ ┃ ┗ 📜QuestionModalOverlay.module.scss
 ┃ ┃ ┃ ┣ 📜BingoBoard.jsx
 ┃ ┃ ┃ ┗ 📜BingoBoard.module.scss
 ┃ ┃ ┣ 📂BingoHeader
 ┃ ┃ ┃ ┣ 📂StatusBoard
 ┃ ┃ ┃ ┃ ┣ 📜StatusBoard.jsx
 ┃ ┃ ┃ ┃ ┗ 📜StatusBoard.module.scss
 ┃ ┃ ┃ ┣ 📜BingoHeader.jsx
 ┃ ┃ ┃ ┗ 📜BingoHeader.module.scss
 ┃ ┃ ┣ 📂UserBoard
 ┃ ┃ ┃ ┣ 📜UserBoard.jsx
 ┃ ┃ ┃ ┗ 📜UserBoard.module.scss
 ┃ ┃ ┣ 📂UserSettingModal
 ┃ ┃ ┃ ┣ 📂UserAvatarModal
 ┃ ┃ ┃ ┃ ┣ 📜UserAvatarModal.jsx
 ┃ ┃ ┃ ┃ ┗ 📜UserAvatarModal.module.scss
 ┃ ┃ ┃ ┣ 📂UserNameModal
 ┃ ┃ ┃ ┃ ┣ 📜UserNameModal.jsx
 ┃ ┃ ┃ ┃ ┗ 📜UserNameModal.module.scss
 ┃ ┃ ┃ ┣ 📜UserSettingModalOverlay.jsx
 ┃ ┃ ┃ ┗ 📜UserSettingModalOverlay.module.scss
 ┃ ┃ ┣ 📜Bingo.jsx
 ┃ ┃ ┗ 📜Bingo.module.scss
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂BingoSettingModal
 ┃ ┃ ┃ ┣ 📂BingoHeadCountModal
 ┃ ┃ ┃ ┃ ┣ 📜BingoHeadCountModal.jsx
 ┃ ┃ ┃ ┃ ┗ 📜BingoHeadCountModal.module.scss
 ┃ ┃ ┃ ┣ 📂BingoNameModal
 ┃ ┃ ┃ ┃ ┣ 📜BingoNameModal.jsx
 ┃ ┃ ┃ ┃ ┗ 📜BingoNameModal.module.scss
 ┃ ┃ ┃ ┣ 📂BingoSizeModal
 ┃ ┃ ┃ ┃ ┣ 📜BingoSizeModal.jsx
 ┃ ┃ ┃ ┃ ┗ 📜BingoSizeModal.module.scss
 ┃ ┃ ┃ ┣ 📜BingoSettingModalOverlay.jsx
 ┃ ┃ ┃ ┗ 📜BingoSettingModalOverlay.module.scss
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┗ 📜Home.module.scss
 ┃ ┣ 📂Inaccess
 ┃ ┃ ┣ 📜Inaccess.jsx
 ┃ ┃ ┗ 📜Inaccess.module.scss
 ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜NotFound.module.scss
 ┃ ┗ 📂Result
 ┃ ┃ ┣ 📜Result.jsx
 ┃ ┃ ┗ 📜Result.module.scss
 ┣ 📂stores
 ┃ ┣ 📜answerStore.js
 ┃ ┣ 📜bingoInfoStore.js
 ┃ ┣ 📜questionStore.js
 ┃ ┣ 📜userAvatarStore.js
 ┃ ┗ 📜userInfoStore.js
 ┣ 📂styles
 ┃ ┣ 📜color.scss
 ┃ ┣ 📜font.scss
 ┃ ┗ 📜reset.scss
 ┣ 📂utils
 ┃ ┣ 📜avatarMappingObject.js
 ┃ ┣ 📜shuffleArray.js
 ┃ ┗ 📜sortAnswersByQuestionId.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

# ⚙️ Dependencies / 의존성

### Dependencies

```json
{
  "dependencies": {
    "@stomp/stompjs": "^7.0.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.2",
    "react-spinners": "^0.13.8",
    "react-toastify": "^10.0.4",
    "sass": "^1.70.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "eslint": "^8.56.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "prettier": "^3.2.4",
    "vite": "^5.0.8"
  }
}
```

# 🧑‍💻 Built With / 누구랑 만들었나요?

<br/>
<div align="center">
<table>
    <thead>
        <tr>
            <th colspan="2">Front</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center"><a href="https://github.com/KangJiUng">강지웅</a></td>
            <td align="center"><a href="https://github.com/kiuuon">김기원</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/KangJiUng"><img src="https://avatars.githubusercontent.com/u/107825793?v=4" width="150px" height="150px"/></a></td>
            <td><a href="https://github.com/kiuuon"><img src="https://avatars.githubusercontent.com/u/74997112?v=4" width="150px" height="150px"/></a></td>
        </tr>
    </tbody>
</table>
</div>
<br/>
