function Nav() {
  return (
    <div class="flex gap-4 ...">
      <div class="w-24 flex-none rounded-md bg-white p-4 py-6 ..."><a href="#home">HOME</a></div>
      <div class="w-64 flex-auto rounded-md bg-white p-4 py-6 ..."><a href="#about">ABOUT</a></div>
      <div class="flex-1 rounded-md bg-white p-4 py-6 ..."><a href="#works">WORKS</a></div>
    </div>
  );
}

export default Nav;
