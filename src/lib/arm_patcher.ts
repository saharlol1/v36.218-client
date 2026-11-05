export class ArmPatcher {
    private static patchCode(address: NativePointer, extender: Function) {
        Memory.patchCode(address, Process.pageSize, (code) => {
            const w = new Arm64Writer(code, { pc: address }); // PS: change this to ArmWriter incase using / porting to an arm32 runtime
            extender(w);
            w.flush();
        });
    }

    public static nop(address: NativePointer) {
        this.patchCode(address, (w: Arm64Writer) => w.putNop());
    }

    public static ret(address: NativePointer) {
        this.patchCode(address, (w: Arm64Writer) => w.putRet());
    }

    public static jumpout(address: NativePointer, jump: NativePointer) {
        this.patchCode(
            address,
            (w: Arm64Writer) => w.putBranchAddress(jump)
        );
    }
}