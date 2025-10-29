
import React from 'react';
import { Send } from 'lucide-react';

export const NewsletterForm = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-white font-serif mb-4">Stay Informed</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-brand-gray-100 border border-brand-gray-200 text-white placeholder-gray-400 text-sm rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
                <button
                    type="submit"
                    className="bg-brand-gold text-brand-dark p-2.5 rounded-r-md hover:bg-brand-gold-light transition-colors"
                    aria-label="Subscribe to newsletter"
                >
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}
