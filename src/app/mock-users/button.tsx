"use client";

function Button() {
  return (
    <div>
      <button
        className="bg-blue-800 px-6 py-3 rounded-full mt-10 hover:cursor-pointer "
        onClick={() => {
          alert("click me");
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Button;
