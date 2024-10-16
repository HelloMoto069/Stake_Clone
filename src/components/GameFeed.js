import React from "react";
import "./GameFeed.css";
import { Link } from "react-router-dom";

export default function GameFeed() {
  return (
    <div style={{ backgroundColor: "#282c34", height: "100vh" }}>
      <div className="games">
        <Link to="/home/mines">
          <img
            src="https://play-lh.googleusercontent.com/ycb45SOcSD3xxLGqpJUXzssyhAoRcy9HPUOWGp-5j5Yj484YPutyTl9sa0WhB9lLyiE"
            alt="Dice Game"
          />
        </Link>
        <Link to="/home/mines">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/Limbo_Box_Art.jpg"
            alt="Limbo Game"
          />
        </Link>
        <Link to="/home/mines">
          <img
            src="https://www.livebet.com/images/casino/games/funky-games/mines.webp"
            alt="Mines Game"
          />
        </Link>
        <Link to="/home/mines">
          <img
            src="https://cdn.dribbble.com/userupload/12265452/file/original-ba1fdb60fca973dfa660ba77530f9d86.jpeg?crop=0x4-1204x907&resize=400x300&vertical=center"
            alt="Plinko Game"
          />
        </Link>
        <Link to="/home/mines">
          <img
            src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-coming-soon-poster-png-image_6681269.jpg"
            alt="Coming Soon"
          />
        </Link>
      </div>
    </div>
  );
}
