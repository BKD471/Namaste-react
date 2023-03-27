import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  console.log(setIsVisible);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold  text-xl">{title}</h3>
      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible()}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible()}
        >
          Show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setIsVisibleSection] = useState("");
  console.log(setIsVisibleSection);
  return (
    <div>
      <h1 className="text-3xl m-2 p-2 font-bold to-blue-700">InstaMart!!</h1>
      <Section
        title={"About Instamart"}
        description={
          "Pretium quam vulputate dignissim suspendisse in est ante in nibh. Aenean et tortor at risus viverra adipiscing at. Vitae justo eget magna fermentum iaculis eu non diam. Nunc congue nisi vitae suscipit tellus mauris. Porta non pulvinar neque laoreet. Arcu non odio euismod lacinia at. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Dignissim convallis aenean et tortor at risus. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ut sem viverra aliquet eget sit amet tellus. Turpis egestas sed tempus urna et pharetra pharetra. Suscipit tellus mauris a diam maecenas sed enim ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
        }
        isVisible={visibleSection === "about"} //dictates its visible or not
        setIsVisible={() => {
          if (visibleSection === "about") setIsVisibleSection("");
          else setIsVisibleSection("about");
        }} ///dictates what is visible
      />

      <Section
        title={"Team Instamart"}
        description={
          "Lacus sed viverra tellus in hac. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Odio morbi quis commodo odio aenean sed adipiscing diam. Phasellus vestibulum lorem sed risus ultricies tristique. Est ullamcorper eget nulla facilisi etiam dignissim diam. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Sed risus ultricies tristique nulla aliquet enim. Urna condimentum mattis pellentesque id nibh. Enim praesent elementum facilisis leo vel fringilla est. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Id velit ut tortor pretium viverra. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Ornare aenean euismod elementum nisi quis eleifend quam. Ullamcorper velit sed ullamcorper morbi. Aliquam ut porttitor leo a diam sollicitudin. Scelerisque varius morbi enim nunc faucibus. Eget egestas purus viverra accumsan in. Malesuada bibendum arcu vitae elementum curabitur."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          if (visibleSection === "team") setIsVisibleSection("");
          else setIsVisibleSection("team");
        }}
      />

      <Section
        title={"Details Instamart"}
        description={
          "Pretium quam vulputate dignissim suspendisse in est ante in nibh. Aenean et tortor at risus viverra adipiscing at. Vitae justo eget magna fermentum iaculis eu non diam. Nunc congue nisi vitae suscipit tellus mauris. Porta non pulvinar neque laoreet. Arcu non odio euismod lacinia at. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Dignissim convallis aenean et tortor at risus. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ut sem viverra aliquet eget sit amet tellus. Turpis egestas sed tempus urna et pharetra pharetra. Suscipit tellus mauris a diam maecenas sed enim ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
        }
        isVisible={visibleSection === "details"}
        setIsVisible={() => {
          if (visibleSection === "details") setIsVisibleSection("");
          else setIsVisibleSection("details");
        }}
      />

      <Section
        title={"Product"}
        description={
          "Pretium quam vulputate dignissim suspendisse in est ante in nibh. Aenean et tortor at risus viverra adipiscing at. Vitae justo eget magna fermentum iaculis eu non diam. Nunc congue nisi vitae suscipit tellus mauris. Porta non pulvinar neque laoreet. Arcu non odio euismod lacinia at. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Dignissim convallis aenean et tortor at risus. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ut sem viverra aliquet eget sit amet tellus. Turpis egestas sed tempus urna et pharetra pharetra. Suscipit tellus mauris a diam maecenas sed enim ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
        }
        isVisible={visibleSection === "product"}
        setIsVisible={() => {
          if (visibleSection === "product") setIsVisibleSection("");
          else setIsVisibleSection("product");
        }}
      />
      <Section
        title={"Careers"}
        description={
          "Pretium quam vulputate dignissim suspendisse in est ante in nibh. Aenean et tortor at risus viverra adipiscing at. Vitae justo eget magna fermentum iaculis eu non diam. Nunc congue nisi vitae suscipit tellus mauris. Porta non pulvinar neque laoreet. Arcu non odio euismod lacinia at. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Dignissim convallis aenean et tortor at risus. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ut sem viverra aliquet eget sit amet tellus. Turpis egestas sed tempus urna et pharetra pharetra. Suscipit tellus mauris a diam maecenas sed enim ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() => {
          if (visibleSection === "careers") setIsVisibleSection("");
          else setIsVisibleSection("careers");
        }}
      />
    </div>
  );
};

export default InstaMart;
