// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import fetchJoke from '../api/getApi';
import renderToDom from '../utils/render';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>if you want a bad programming joke look in the mirror</h1>
    <div id="setup"></div>
    <div id="punchline"></div>
    <button class="btn btn-danger" id="click-me">get an actual joke</button><br />
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => {
  //     fetchJoke().then(data => {
  //       console.log(data)
  //       const setupString = `
  //       <h2>${data.setup}</h2> 
  //       `
  //       renderToDom("#setup", setupString);
  //       const punchlineButton = document.querySelector('#click-me')
  //       punchlineButton.innerHTML = `get punchline`
  //       punchlineButton.addEventListener('click', () => {
  //         const punchlineString = `
  //         <h2>${data.delivery}</h2>
  //         `
  //         renderToDom("#punchline", punchlineString);
  //       })
  //     });
  //   });

  document
    .querySelector('#click-me')
    .addEventListener('click', () => {
      const jokeGenerator = () => {
        fetchJoke().then(data => {
          console.log(data)
          const setupString = `
        <h2>${data.setup}</h2> 
        `
          // renderToDom("#setup", setupString);

          document.querySelector('#app').innerHTML = `
          <h1>if you want a bad programming joke look in the mirror</h1>
          <div id="setup">${setupString}</div>
          <div id="punchline"></div>
          <button class="btn btn-danger" id="click-me">get punchline</button><br />
          <hr />
        `;

          const punchlineButton = document.querySelector('#click-me')
          punchlineButton.innerHTML = `get punchline`
          punchlineButton.addEventListener('click', () => {
            const punchlineString = `
          <h2>${data.delivery}</h2>
          `
            renderToDom("#punchline", punchlineString);

            document.querySelector('#app').innerHTML = `
            <h1>if you want a bad programming joke look in the mirror</h1>
            <div id="setup">${setupString}</div>
            <div id="punchline">${punchlineString}</div>
            <button class="btn btn-danger" id="click-me">get an actual joke</button><br />
            <hr />
          `
            const resetButton = document.querySelector('#click-me')
            resetButton.addEventListener('click', () => {
              jokeGenerator();
            })
          })
        });
      };
      jokeGenerator();
      // USE WITH FIREBASE AUTH
      // ViewDirectorBasedOnUserAuthStatus();
    });
}

init();
