defmodule ClothesScraperTest do
  use ExUnit.Case
  doctest ClothesScraper

  test "greets the world" do
    assert ClothesScraper.hello() == :world
  end
end
