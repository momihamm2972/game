/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/07 14:24:22 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/07 17:37:55 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const canvas = document.getElementById('maradona');
const context = canvas.getContext('2d');
// canvas.width = 900px;
function gameLoop()
{
    // window.requestAnimationFrame(gameLoop);
    //select element top paddle here
    // Select elements with the class 'topPaddle' (returns an HTMLCollection)
    const topPaddle = document.getElementById('topPaddle');
    // const ball = document.getElementById('circl');
    const rect = topPaddle.getBoundingClientRect();
    const hododTiran = rectangle.getBoundingClientRect();
    const tiranX = hododTiran.x;
    // let leftMove = parseInt(topPaddle.style.left) || 30;
    // leftMove += 1;
    // topPaddle.style.left = leftMove + '%';
    const x = rect.x; // X coordinate
    const y = rect.top;  // Y coordinate
    if (topPaddle) {
        topPaddle.style.backgroundColor = 'blue'; // Example: Change the background color
        // console.log('Paddle X:', x);
        // console.log('Tiran X:', tiranX);
        // console.log('Paddle Y:', y);
    } else {
        console.error("Element with ID 'topPaddle' not found.");
    }
    document.addEventListener('keydown', function(event) {
    // This part waits for the 'keydown' event (when a key is pressed)
    // console.log('rah dkhel');
    const topPaddle = document.getElementById('topPaddle');
    if (topPaddle)
    {
    const step = 20; // How many pixels to move the paddle
        console.log('Paddle X:', x);
        console.log('Tiran X:', tiranX + 300);
    // Get the current position of the paddle's 'right' value
    let currentRight = parseInt(window.getComputedStyle(topPaddle).right, 10);
    console.log('Right X:', currentRight);
    
    // Check which key was pressed
    if (event.key === 'a' || event.key === 'A') {
        // If 'A' is pressed, move the paddle left (decreasing 'right' value)
        // topPaddle.style.right = (currentRight + step) + 'px'; // Increase the 'right' value to move left
        // if (currentRight < window.innerWidth - topPaddle.offsetWidth) {
        if (currentRight + 300 < tiranX + 900) {
            if (currentRight + 300 + step > tiranX + 900)
            {
                let rest = (tiranX + 900) - (currentRight + 300);
                console.log("rest is == ", rest);
                topPaddle.style.right = (currentRight + rest) + 'px';
            }
            else
                topPaddle.style.right = (currentRight + step) + 'px'; // Increase 'right' to move left
        }
    } else if (event.key === 'd' || event.key === 'D') {
        // If 'D' is pressed, move the paddle right (increasing 'right' value)
        // topPaddle.style.right = (currentRight - step) + 'px'; // Decrease the 'right' value to move right
        if (currentRight > tiranX) {
            // console.log ("dayza 3ewacher")
            // if () //ila fayta izid ghir li khaso bash ils9 (paddle 3la area)
            if (currentRight - step < tiranX)
            {
                // console.log("################################################### kayen espace");
                let rest = tiranX - currentRight;
                topPaddle.style.right = (currentRight + rest) + 'px';
            }
            else
                topPaddle.style.right = (currentRight - step) + 'px'; // Decrease 'right' to move right
        }
    }
    }
    else
        console.log("kmi")
    });

    // if (ball){

    // }
    // else{
    //     console.error("Element with ID 'topPaddle' not found.");
    // }
    // requestAnimationFrame(gameLoop);
}
gameLoop();