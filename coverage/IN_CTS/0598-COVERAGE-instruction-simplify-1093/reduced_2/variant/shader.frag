#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

void main()
{
 int treeIndex = 1;
 treeIndex = 0;
 if(1.0 > injectionSwitch.y)
  {
   treeIndex ++;
  }
 treeIndex /= 2;
 {
  int treeIndex = treeIndex;
  while((1 <= treeIndex) && (_GLF_global_loop_count < _GLF_global_loop_bound))
   {
    _GLF_global_loop_count ++;
   }
 }
}
