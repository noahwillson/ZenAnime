"use client";

import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { MotionDiv } from "./Motion";
import Link from "next/link";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

const stagger = 0.25;

const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

function AnimeCard({ anime, index }) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [isFavorite, setIsFavorite] = useState(false);

  const imageSrc =
    anime.image && anime.image.original
      ? `https://shikimori.one${anime.image.original}`
      : null;

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: stagger * index,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="max-w-sm rounded relative w-full h-full p-4 shadow-md"
      >
        <div className="relative w-full h-[37vh] sm:justify-center">
          {imageSrc && (
            <div
              className="w-full h-12 cursor-pointer"
              onClick={handleOpenModal}
            >
              <Image
                src={imageSrc}
                alt={anime.name}
                fill
                className="rounded-xl object-contain"
              />
            </div>
          )}
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-lg line-clamp-1 w-full">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {anime.score}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="py-1 px-2 bg-[#161921] rounded-sm"
              onClick={handleFavorite}
            >
              Add to Watchlist
            </button>
            <button onClick={handleFavorite}>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </MotionDiv>
      <Modal isOpen={isModalOpen}>
        <div className="fixed top-0 left-0 z-50 min-w-[300px] w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="rounded-lg">
            <ul>
              <li key={anime.id}>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  {anime.image && anime.image.original && (
                    <Image
                      src={`https://shikimori.one${anime.image.original}`}
                      alt={anime.name}
                      width={100}
                      height={100}
                      className="w-full h-56 object-cover rounded-md"
                    />
                  )}
                  <div class="p-5">
                    <div className="flex justify-between items-center gap-1">
                      <h2 className="font-bold text-white text-lg line-clamp-1 w-full">
                        {anime.name}
                      </h2>
                      <div className="py-1 px-2 bg-[#161921] rounded-sm">
                        <p className="text-white text-sm font-bold capitalize">
                          {anime.kind}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center my-2">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/episodes.svg"
                          alt="episodes"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <p className="text-base text-white font-bold">
                          {anime.episodes || anime.episodes_aired}
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/star.svg"
                          alt="star"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                        <p className="text-base font-bold text-[#FFAD49]">
                          {anime.score}
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-bold">{anime.genre}</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      Read more
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <button
              className="mt-4 bg-blue-500 text-slate-900 px-4 py-2 rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AnimeCard;
