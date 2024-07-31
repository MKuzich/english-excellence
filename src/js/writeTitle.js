// document.addEventListener('DOMContentLoaded', function () {
//   const titleElement = document.querySelector('.hero-title');
//   const highlightElement = document.querySelector('.hero-title-highlight');

//   const mainText = 'Discover the joy of learning ';
//   const highlightedText = 'English';
//   const endText = ' with us!';

//   let mainIndex = 0;
//   let highlightIndex = 0;
//   let endIndex = 0;

//   function printTitle() {
//     if (mainIndex < mainText.length) {
//       titleElement.innerHTML = mainText.substring(0, mainIndex + 1);
//       mainIndex++;
//     } else if (highlightIndex < highlightedText.length) {
//       highlightElement.innerHTML = highlightedText.substring(
//         0,
//         highlightIndex + 1
//       );
//       highlightIndex++;
//     } else if (endIndex < endText.length) {
//       titleElement.innerHTML =
//         mainText +
//         `<span class="cta-title-highlight">${highlightedText}</span>` +
//         endText.substring(0, endIndex + 1);
//       endIndex++;
//     }

//     if (
//       mainIndex < mainText.length ||
//       highlightIndex < highlightedText.length ||
//       endIndex < endText.length
//     ) {
//       setTimeout(printTitle, 100);
//     }
//   }

//   titleElement.innerHTML = '';
//   highlightElement.innerHTML = '';

//   printTitle();
// });
