import { arxanKiller } from "./hooks/arxanKiller"

rpc.exports.init = (stage, options) => {
    console.log("[* rpc.exports.init] frida:", Frida.version, "arch:", Process.arch);
    arxanKiller();
}