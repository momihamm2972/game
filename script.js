/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: momihamm <momihamm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/07 14:24:22 by momihamm          #+#    #+#             */
/*   Updated: 2024/11/07 17:58:51 by momihamm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const canvas = document.getElementById('maradona');
const context = canvas.getContext('2d');
function gameLoop()
{
    // const topPaddle = document.getElementById('topPaddle');
    // const bottomPaddle = document.getElementById('botmPaddle');
    // const rect = topPaddle.getBoundingClientRect();
    const hododTiran = rectangle.getBoundingClientRect();
    const tiranX = hododTiran.x;
    // const x = rect.x; // X coordinate
    // const y = rect.top;  // Y coordinate
    // if (topPaddle) {
    //     topPaddle.style.backgroundColor = 'blue'; // Example: Change the background color
    // } else {
    //     console.error("Element with ID 'topPaddle' not found.");
    // }
    document.addEventListener('keydown', function(event) {
    const topPaddle = document.getElementById('topPaddle');
    const botPaddle = document.getElementById('botmPaddle');
    if (topPaddle && botPaddle)
    {
    const step = 20; // How many pixels to move the paddle
        // console.log('Paddle X:', x);
        // console.log('Tiran X:', tiranX + 300);
    let currentRight = parseInt(window.getComputedStyle(topPaddle).right, 10);
    let currentBottom = parseInt(window.getComputedStyle(botPaddle).right, 10);
    // console.log('Right X:', currentRight);
    
    // Check which key was pressed
    if (event.key === 'a' || event.key === 'A') {
        if (currentRight + 300 < tiranX + 900) {
            if (currentRight + 300 + step > tiranX + 900)
            {
                let rest = (tiranX + 900) - (currentRight + 300);
                // console.log("rest is == ", rest);
                topPaddle.style.right = (currentRight + rest) + 'px';
            }
            else
                topPaddle.style.right = (currentRight + step) + 'px'; // Increase 'right' to move left
        }
    } else if (event.key === 'd' || event.key === 'D') {
        if (currentRight > tiranX) {
            if (currentRight - step < tiranX)
            {
                let rest = tiranX - currentRight;
                topPaddle.style.right = (currentRight + rest) + 'px';
            }
            else
                topPaddle.style.right = (currentRight - step) + 'px'; // Decrease 'right' to move right
        }
    }
    // ##########################   BOTTOM
    if (event.key === 'ArrowLeft') {
        if (currentBottom + 300 < tiranX + 900) {
            if (currentBottom + 300 + step > tiranX + 900)
            {
                let rest = (tiranX + 900) - (currentBottom + 300);
                console.log("rest is == ", rest);
                botPaddle.style.right = (currentBottom + rest) + 'px';
            }
            else
                botPaddle.style.right = (currentBottom + step) + 'px'; // Increase 'right' to move left
        }
    } else if (event.key === 'ArrowRight') {
        if (currentBottom > tiranX) {
            if (currentBottom - step < tiranX)
            {
                let rest = tiranX - currentBottom;
                botPaddle.style.right = (currentBottom + rest) + 'px';
            }
            else
                botPaddle.style.right = (currentBottom - step) + 'px'; // Decrease 'right' to move right
        }
    }
    }
    else
        console.log("kmi")
    });
}
gameLoop();