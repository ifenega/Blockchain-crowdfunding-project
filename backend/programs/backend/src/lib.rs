use anchor_lang::prelude::*;

declare_id!("ATjQuoZoo28aiBBMF5puNn9fcDzok3369UQENQFJNudy");

#[program]
pub mod backend {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
