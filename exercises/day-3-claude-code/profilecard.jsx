import React, { useState } from "react";
import { Star, MapPin, Plus, Check } from "lucide-react";

export default function ProfileCard({
  image = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop",
  name = "Kabir Verma",
  title = "Fine Line & Minimal Artist",
  bio = "8 years turning quiet ideas into permanent ink. Based in Mumbai, known for delicate linework that ages as gracefully as it heals.",
  location = "Mumbai",
  rating = 4.9,
}) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="relative h-56 sm:h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/10 to-transparent" />

        <div className="absolute top-3 right-3 flex items-center gap-1 bg-neutral-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-neutral-100">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-6 pt-4 pb-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-medium text-neutral-50 truncate">
              {name}
            </h2>
            <p className="text-sm text-teal-400 mt-0.5">{title}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2 text-neutral-500">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{location}</span>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed mt-3">
          {bio}
        </p>

        <button
          onClick={() => setFollowing((f) => !f)}
          className={`mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
            following
              ? "bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-750"
              : "bg-teal-500 text-neutral-950 hover:bg-teal-400"
          }`}
        >
          {following ? (
            <>
              <Check className="w-4 h-4" />
              Following
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Follow
            </>
          )}
        </button>
      </div>
    </div>
  );
}
