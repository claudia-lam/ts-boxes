import { BoxInterface } from "./BoxList";
// move interface above docstring OR put inside own interfaces file
/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

interface createBoxInterface extends BoxInterface {
  remove: (id: string) => void;
}

function Box({
  id,
  width = 5,
  height = 5,
  backgroundColor,
  remove,
}: createBoxInterface) {
  /** Remove a box. */
  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div
        className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor,
        }}
      />
      <button className="Box-removeBtn" onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
