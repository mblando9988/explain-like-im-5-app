import SwiftUI

@main
struct ExplainLikeIm5App: App {
    @State private var question: String = ""
    @State private var messages: [String] = ["Hi! Ask me anything and I'll explain it like you're 5."]

    var body: some Scene {
        WindowGroup {
            VStack {
                ScrollView {
                    ForEach(messages, id: .self) { msg in
                        Text(msg)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .padding()
                    }
                }
                HStack {
                    TextField("Enter your question", text: $question)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    Button("Send") {
                        guard !question.isEmpty else { return }
                        messages.append("You: \(question)")
                        messages.append(response(for: question))
                        question = ""
                    }
                }
                .padding()
            }
            .padding()
            .frame(minWidth: 400, minHeight: 300)
        }
    }

    func response(for q: String) -> String {
        switch q.lowercased() {
        case "how does the internet work?":
            return "Think of the internet like a giant postal system for messages."
        case "what is artificial intelligence?":
            return "AI is like teaching computers to recognize patterns, similar to how we learn new words."
        default:
            return "That's a great question! I'm not sure, but let's explore it together."
        }
    }
}
