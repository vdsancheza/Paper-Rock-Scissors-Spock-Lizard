/**
 * Created by kl4tzz on 25/11/16.
 */
$(document).ready(function () {
    "use strict";
    var buttons, computerSelected, playerSelected, result,gana_A;
    gana_A = {
        "rock": ["scissors", "lizard"],
        "scissors": ["lizard", "paper"],
        "paper": ["rock", "spock"],
        "spock": ["rock", "scissors"],
        "lizard": ["spock", "paper"]
    };

    function computer(){
        var options = ["rock", "scissors", "paper", "spock", "lizard"];
        computerSelected = options[parseInt(Math.random() * 5) ];
        $("#resultComputer").html($("#" + computerSelected).html());
        verify();
    }

    function human() {
        var i = 5;
        while (i--) {
            buttons[i].onclick = selectOption;
        }
    }
    function selectOption() {
        reset();
        playerSelected = this.id;
        $("#result").html($("#" + playerSelected).html());
        computer();
    }

    function verify() {
        if (playerSelected === computerSelected ){
            $("#result").attr("style", "border: 8px solid red !important");
            $("#resultComputer").attr("style", "border: 8px solid red !important");
            $("#info").html("TIE!");
        } else if (gana_A[playerSelected].indexOf(computerSelected) !== -1) {
            $("#result").attr("style", "border: 8px solid red !important");
            $("#info").html("You WIN!");
            $("#YScore").html(+$("#YScore").html()+1);
        } else{
            $("#resultComputer").attr("style", "border: 8px solid red !important");
            $("#info").html("You Lost, COMPUTER WIN!");
            $("#CScore").html(+$("#CScore").html()+1);
        }
    }

    function reset() {
        $("#result").attr("style", "border: 8px solid grey !important");
        $("#resultComputer").attr("style", "border: 8px solid grey !important");
    }

    function initialize() {
        buttons = document.getElementsByClassName("button");
        human();
    }
    initialize();

});
