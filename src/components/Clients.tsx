import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex ss:flex-row flex-col flex-wrap  items-center justify-between mt-[100px] gap-3">
      {clients.map((client, index) => (
        <div key={client.id} className="flex items-center h-[55px]">
          <img
            alt={client.logo}
            className={`md:w-[192px] w-[180px]   object-contain ${
              index === 2 ? "self-start" : ""
            }`}
            src={client.logo}
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
