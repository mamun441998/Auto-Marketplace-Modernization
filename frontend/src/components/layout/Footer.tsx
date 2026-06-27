import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 md:flex md:flex-row">
                    <p>© 2026 MotoHave. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <span>Privacy</span>
                        <span>Terms</span>
                        <span>Support</span>
                    </div>
                    </div>
            </Container>
                  
        </footer>
    );
}