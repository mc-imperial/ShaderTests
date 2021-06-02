#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 int GLF_dead7r = 1;
 GLF_dead7r = 9;
 while((0 <= GLF_dead7r) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   GLF_dead7r = (GLF_dead7r / 2) - 1;
  }
}
