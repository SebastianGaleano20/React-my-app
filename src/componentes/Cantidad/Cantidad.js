import "../Cantidad/Cantidad.css";

const Cantidad = () => {
  return (
    <>
      <div class="cant">
        <p>(1034 unidades disponibles)</p>
        <label for="cant">Cantidad:</label>
        <select name="cantidades" id="cant">
          <option value="1 unidad">1 unidad</option>
          <option value="1 unidad">2 unidades</option>
          <option value="1 unidad">3 unidades</option>
          <option value="1 unidad">4 unidades</option>
        </select>
      </div>
    </>
  );
};
export default Cantidad;
