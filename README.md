# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 파일 및 폴더구조
```
┏ codegram-sns(Root)
┣ 📂public
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┗ 📂images
┃ ┣ 📂components
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┣ AuthForm.jsx
┃ ┃ ┃ ┗ AuthHeader.jsx
┃ ┃ ┣ 📂follower
┃ ┃ ┃ ┣ FollowerItem.jsx
┃ ┃ ┃ ┗ FollowerList.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┣ EmptyFeed.jsx
┃ ┃ ┃ ┗ PostFeed.jsx
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┣ 📂bot-nav
┃ ┃ ┃ ┃ ┣ BottomNavigation.jsx
┃ ┃ ┃ ┃ ┗ BottomNavigation.module.scss
┃ ┃ ┃ ┗ 📂top-nav
┃ ┃ ┃ ┃ ┣ TopBasicNav.jsx
┃ ┃ ┃ ┃ ┣ TopChatNav.jsx
┃ ┃ ┃ ┃ ┣ TopMainNav.jsx
┃ ┃ ┃ ┃ ┣ TopSearchNav.jsx
┃ ┃ ┃ ┃ ┗ TopUploadNav.jsx
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ 📂post
┃ ┃ ┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┃ ┃ ┣ Comment.jsx
┃ ┃ ┃ ┃ ┃ ┣ Comment.module.scss
┃ ┃ ┃ ┃ ┃ ┗ CommentSection.jsx
┃ ┃ ┃ ┃ ┣ 📂post-action
┃ ┃ ┃ ┃ ┃ ┣ CommentButton.jsx
┃ ┃ ┃ ┃ ┃ ┣ LikeButton.jsx
┃ ┃ ┃ ┃ ┃ ┗ PostAction.jsx
┃ ┃ ┃ ┃ ┣ PostContent.jsx
┃ ┃ ┃ ┃ ┗ PostImage.jsx
┃ ┃ ┃ ┗ 📂post-create-edit
┃ ┃ ┃ ┃ ┣ ImageUploadBtn.jsx
┃ ┃ ┃ ┃ ┗ PostForm.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ ProductForm.jsx
┃ ┃ ┃ ┗ ProductImage.jsx
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ 📂portfolio
┃ ┃ ┃ ┃ ┣ Portfolio.jsx
┃ ┃ ┃ ┃ ┣ Portfolio.module.scss
┃ ┃ ┃ ┃ ┗ PortfolioItem.jsx
┃ ┃ ┃ ┣ 📂profile-info
┃ ┃ ┃ ┃ ┣ PostGrid.jsx
┃ ┃ ┃ ┃ ┣ PostList.jsx
┃ ┃ ┃ ┃ ┣ ProfileActions.jsx
┃ ┃ ┃ ┃ ┣ ProfileInfo.jsx
┃ ┃ ┃ ┃ ┗ ProfileTabs.jsx
┃ ┃ ┃ ┣ 📂profile-settings
┃ ┃ ┃ ┃ ┣ ProfileForm.jsx
┃ ┃ ┃ ┃ ┗ ProfileForm.module.scss
┃ ┃ ┃ ┗ ProfileImage.jsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ SearchResults.jsx
┃ ┃ ┃ ┗ UserResult.jsx
┃ ┃ ┗ 📂ui
┃ ┃ ┃ ┣ 📂modal
┃ ┃ ┃ ┃ ┣ ConfirmModal.jsx
┃ ┃ ┃ ┃ ┣ Modal.module.scss
┃ ┃ ┃ ┃ ┗ OptionsModal.jsx
┃ ┃ ┃ ┣ Button.jsx
┃ ┃ ┃ ┣ Button.module.scss
┃ ┃ ┃ ┣ Button.scss
┃ ┃ ┃ ┣ Input.jsx
┃ ┃ ┃ ┣ Input.module.scss
┃ ┃ ┃ ┣ InputField.jsx
┃ ┃ ┃ ┗ Layout.jsx
┃ ┣ 📂hooks
┃ ┃ ┣ useAPI.js
┃ ┃ ┗ useModal.js
┃ ┣ 📂pages
┃ ┃ ┣ 📂followers-followings
┃ ┃ ┃ ┣ followers.jsx
┃ ┃ ┃ ┗ followings.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┗ Home.jsx
┃ ┃ ┣ 📂login
┃ ┃ ┃ ┣ LoginEmail.jsx
┃ ┃ ┃ ┗ LoginMain.jsx
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ Post.jsx
┃ ┃ ┃ ┣ PostCreate.jsx
┃ ┃ ┃ ┗ PostEdit.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ ProductCreate.jsx
┃ ┃ ┃ ┗ ProductEdit.jsx
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ MyProfile.jsx
┃ ┃ ┃ ┣ ProfileEdit.jsx
┃ ┃ ┃ ┣ ProfileSetup.jsx
┃ ┃ ┃ ┗ YourProfile.jsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┗ Search.jsx
┃ ┃ ┣ 📂signup
┃ ┃ ┃ ┗ Signup.jsx
┃ ┃ ┣ 📂splash-screen
┃ ┃ ┃ ┗ SplashScreen.jsx
┃ ┃ ┣ ModalExample.jsx
┃ ┃ ┗ Page404.jsx
┃ ┣ 📂redux
┃ ┃ ┣ actions.js
┃ ┃ ┣ modalSlice.js
┃ ┃ ┣ reducers.js
┃ ┃ ┗ store.js
┃ ┣ App.jsx
┃ ┣ index.css
┃ ┣ main.jsx
┃ ┗ reset.css
┣ .env
┣ .gitignore
┣ eslint.config.js
┣ index.html
┣ package-lock.json
┣ package.json
┣ README.md
┗ vite.config.js
```