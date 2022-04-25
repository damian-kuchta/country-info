const Select = (props) => {
  return (
    <section >
      <label >
        Type or select the name of the country:
      </label>
      <select >
        <option>
          Select the country
        </option>
      </select>
    </section>
  );
};

export default Select;

<section class="select-wrap">
<label class="select-wrap__label" for="countries">
  Type or select the name of the country:
</label>
<select class="select-wrap__select" name="" id="countries">
  <option selected disabled value="dasd">
    Select the country
  </option>
</select>
</section>