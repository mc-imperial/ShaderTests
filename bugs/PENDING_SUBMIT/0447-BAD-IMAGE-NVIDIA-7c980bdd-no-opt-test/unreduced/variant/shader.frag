#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

precision highp int;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
mediump vec4 GLF_live8gl_FragCoord = _GLF_FUZZED(vec4(2.5, 4.9, -388.576, -4513.4071));

vec4 GLF_live8_GLF_color = _GLF_FUZZED(vec4(-9641.1221, -7852.2323, 9.6, -4.2));

layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_live8resolution;
};
const vec4 GLF_live8pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), vec4(0.5, 0.0, 0.0, 1.0), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0));

precision highp float;

precision highp int;

struct GLF_live6BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live6BST GLF_live6tree[10] = _GLF_FUZZED(GLF_live6BST[10](GLF_live6BST(-72922, -12556, int(153035u)), GLF_live6BST((+ 57292), -83170, 3399), GLF_live6BST(-60381, 4364, -89524), GLF_live6BST(-21901, -4188, -79208), GLF_live6BST(47515, 78347, 93313), GLF_live6BST(80829, -73295, 69600), GLF_live6BST(-63382, 73904, 89282), GLF_live6BST(23405, -47026, -50897), GLF_live6BST(-60381, 4364, -89524), GLF_live6BST(80829, -73295, 69600)));

void GLF_live6makeTreeNode(inout GLF_live6BST GLF_live6tree, int GLF_live6data)
{
 GLF_live6tree.data = GLF_live6data;
 GLF_live6tree.leftIndex = - 1;
 if(_GLF_DEAD(false))
  return;
 GLF_live6tree.rightIndex = - 1;
}
precision highp float;

precision highp int;

int GLF_live7map[256] = _GLF_FUZZED(int[256](-72539, -81926, -80168, -49970, 53370, -7397, (17293 / (-59097 | -64290)), -21223, -23013, int((8656 == 98031)), (+ 9658), 62594, 31860, -91209, -81520, -37395, -82120, 49853, 91224, 62594, -81520, -23013, -82120, (17293 / (-59097 | -64290)), 49853, 91224, -91209, -21223, -37395, -81926, (+ 9658), -49970, -80168, -72539, -7397, int((8656 == 98031)), 53370, 31860, 91224, 49853, -49970, -82120, -81926, -37395, -23013, (17293 / (-59097 | -64290)), -91209, -81520, -80168, 31860, -21223, int((8656 == 98031)), -72539, 53370, (+ 9658), -7397, 62594, -23013, 53370, (+ 9658), -72539, -49970, -91209, 49853, -21223, 91224, 31860, int((8656 == 98031)), -82120, -7397, -81926, 62594, (17293 / (-59097 | -64290)), -81520, -37395, -80168, int((8656 == 98031)), -23013, 31860, -49970, 49853, (17293 / (-59097 | -64290)), 91224, -37395, -81926, -81520, (+ 9658), -82120, -7397, -80168, 53370, -72539, 62594, -91209, -21223, -80168, 49853, (+ 9658), -81926, -81520, 62594, -49970, -37395, -21223, (17293 / (-59097 | -64290)), -23013, -91209, 53370, 31860, -72539, -82120, -7397, 91224, int((8656 == 98031)), -81926, -81520, -72539, -21223, -49970, int((8656 == 98031)), 49853, -7397, 31860, -23013, 53370, -37395, -80168, 91224, -82120, -91209, 62594, (+ 9658), (17293 / (-59097 | -64290)), -23013, -21223, -72539, (+ 9658), 62594, -81520, 91224, -80168, -81926, 49853, 53370, -49970, -82120, 31860, -91209, -7397, -37395, int((8656 == 98031)), (17293 / (-59097 | -64290)), (+ 9658), -49970, -37395, 62594, -23013, -21223, -7397, 91224, int((8656 == 98031)), (17293 / (-59097 | -64290)), -82120, -81926, 49853, 53370, -91209, -80168, -81520, 31860, -72539, 62594, 49853, 53370, -23013, -91209, int((8656 == 98031)), (17293 / (-59097 | -64290)), (+ 9658), -81926, -7397, -81520, -49970, -80168, 31860, -82120, 91224, -21223, -72539, -37395, -72539, -80168, (+ 9658), -7397, 53370, -23013, 49853, -91209, 62594, -37395, -21223, -81520, -82120, int((8656 == 98031)), -81926, 31860, (17293 / (-59097 | -64290)), 91224, -49970, (17293 / (-59097 | -64290)), 62594, -23013, -81926, -80168, -72539, 53370, -37395, -7397, -21223, -91209, (+ 9658), -81520, -49970, 91224, 49853, -82120, 31860, int((8656 == 98031)), -81520, -81926, (+ 9658), -82120, 62594, (17293 / (-59097 | -64290)), -72539, -80168, -21223, -49970, -91209, 49853, 91224, -37395, int((8656 == 98031)), 53370, -7397, 31860, -23013, 53370, -80168, (17293 / (-59097 | -64290)), 62594, -82120, -81926, 31860, -7397, 49853));

precision highp float;

mediump vec4 GLF_live9gl_FragCoord = _GLF_FUZZED((mat2x4(-3047.2919, 368.747, 887.324, 687.507, 6.5, -7797.3968, -8123.6333, -27.29) * vec2(2.1, 3.1)));

vec4 GLF_live9_GLF_color = _GLF_FUZZED(vec4(-4.3, -2342.9577, -88.20, 922.783));

layout(set = 0, binding = 2) uniform sampler2D GLF_live9tex;

precision highp float;

precision highp int;

mediump vec4 GLF_live4gl_FragCoord = _GLF_FUZZED(vec4(5.6, 7.7, -2.3, -7.9));

const int GLF_live4N = 10;

int GLF_live4data[10] = _GLF_FUZZED(int[10](-32190, GLF_live4N, 18897, 5819, -9854, 75983, ivec3(42633, -34729, 48312).x, GLF_live4N, -55505, GLF_live4N));

precision highp float;

precision highp int;

const vec4 GLF_live2pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), _GLF_IDENTITY(vec4(_GLF_IDENTITY(0.5, min(0.5, 0.5)), 0.0, _GLF_IDENTITY(0.0, float(_GLF_IDENTITY(mat4x2(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, abs(0.0), 0.0), mat4x2(0.0, 0.0, _GLF_IDENTITY(0.0, mix(float(0.0), float(_GLF_FUZZED(-2.5)), bool(false))), 0.0, 0.0, 0.0, 0.0, 0.0) + (mat4x2(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, abs(0.0), 0.0))))), 1.0), (true ? vec4(_GLF_IDENTITY(0.5, min(0.5, 0.5)), 0.0, _GLF_IDENTITY(0.0, float(_GLF_IDENTITY(mat4x2(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, abs(0.0), 0.0), mat4x2(0.0, 0.0, _GLF_IDENTITY(0.0, mix(float(0.0), float(_GLF_FUZZED(-2.5)), bool(false))), 0.0, 0.0, 0.0, 0.0, 0.0) + (mat4x2(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, abs(0.0), 0.0))))), 1.0) : _GLF_FUZZED((vec4(-9.1, 8053.3829, 959.820, -5.6) / 7.7)))), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, _GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, (1.0) + sqrt(0.0))) - length(vec3(0.0, 0.0, 0.0)))), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, _GLF_IDENTITY(1.0, clamp(1.0, 1.0, 1.0)), 1.0), vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0));

const vec4 GLF_live2picdata[8] = vec4[8](vec4(4, 4, 20, 4), vec4(4, 4, 4, 20), vec4(4, 20, 20, 4), vec4(20, 4, 4, 8), vec4(8, 6, 4, 2), vec4(2, 12, 2, 4), vec4(16, 2, 4, 4), vec4(12, 22, 4, 4));

bool GLF_live2collision(vec2 GLF_live2pos, vec4 GLF_live2quad)
{
 if(GLF_live2pos.x < GLF_live2quad.x)
  {
   return false;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return true;
 if(_GLF_DEAD(false))
  return true;
 if(_GLF_DEAD(false))
  return true;
 if(GLF_live2pos.y < GLF_live2quad.y)
  {
   do
    {
     return false;
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 if(_GLF_IDENTITY(GLF_live2pos.x, clamp(_GLF_IDENTITY(GLF_live2pos.x, (false ? _GLF_FUZZED(1.3) : GLF_live2pos.x)), GLF_live2pos.x, GLF_live2pos.x)) > GLF_live2quad.x + _GLF_IDENTITY(GLF_live2quad.z, clamp(_GLF_IDENTITY(GLF_live2quad.z, (false ? _GLF_FUZZED(131.603) : GLF_live2quad.z)), GLF_live2quad.z, GLF_live2quad.z)))
  {
   return false;
  }
 do
  {
   if(GLF_live2pos.y > GLF_live2quad.y + GLF_live2quad.w)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      return true;
     {
      int GLF_live6_looplimiter1 = 0;
      if(GLF_live6_looplimiter1 >= 5)
       {
        1;
       }
     }
     return false;
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
 for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 & (0 | 1))); _injected_loop_counter ++)
  {
   return true;
   if(_GLF_DEAD(false))
    discard;
  }
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   for(int _injected_loop_counter = (0 ^ 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec4(0.0, 1.0, _GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(0.0, 1.0)), dot(vec2(1.0, 0.0), vec2(0.0, 1.0))), 1.0), vec4(1.0, sin(0.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x))), dot(vec4(0.0, 1.0, _GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(0.0, 1.0)), dot(vec2(1.0, _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(-96.45)))), vec2(0.0, 1.0))), 1.0), vec4(1.0, sin(0.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x))))))))
        continue;
       return true;
      }
    }
   if(_GLF_DEAD(false))
    return true;
  }
}
precision highp float;

mediump vec4 GLF_live3gl_FragCoord = _GLF_FUZZED(vec4(-98.81, 87.82, 7440.4551, -538.874));

vec4 GLF_live3_GLF_color = _GLF_FUZZED((mat4(5.9, -4657.2602, 175.116, -732.546, 5213.5947, -186.267, -4112.9246, -9.0, -0.1, -7218.2391, -8.5, 6.7, -4.6, 1.7, -8529.3251, 3.2) * vec4(355.519, -151.804, -7.9, 82.80)));

layout(set = 0, binding = 3) uniform sampler2D GLF_live3tex;

const float GLF_live3weights[9] = float[9](1.0, 0.5, - 0.25, 0.5, 1.0, - 0.5, - 0.25, - 0.5, - 1.0);

precision highp float;

layout(set = 0, binding = 4) uniform sampler2D GLF_live5tex;

precision highp float;

precision highp int;

mediump vec4 GLF_live0gl_FragCoord = _GLF_IDENTITY(_GLF_FUZZED((vec4(_GLF_IDENTITY(-74.84, float(mat2x4(_GLF_IDENTITY(-74.84, max(-74.84, -74.84)), 1.0, 0.0, log(1.0), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED((-5.3 / -7.6))), float(0.0), bool(true))), 0.0)), 0.0))), 9092.3077, 3.7, 4.0) + vec4(425.749, 7.7, 88.14, 65.30))), mix(vec4(_GLF_FUZZED(-2.9), _GLF_FUZZED(46.33), _GLF_FUZZED(-4.6), _GLF_FUZZED((2.7))), vec4(_GLF_IDENTITY((_GLF_FUZZED((vec4(_GLF_IDENTITY(-74.84, float(mat2x4(_GLF_IDENTITY(-74.84, max(-74.84, -74.84)), 1.0, 0.0, log(1.0), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED((-5.3 / -7.6))), float(0.0), bool(true))), 0.0)), 0.0))), 9092.3077, 3.7, 4.0) + vec4(425.749, 7.7, 88.14, 65.30))))[0], ((_GLF_FUZZED((vec4(_GLF_IDENTITY(-74.84, float(mat2x4(_GLF_IDENTITY(-74.84, max(-74.84, -74.84)), 1.0, 0.0, log(1.0), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED((-5.3 / -7.6))), float(0.0), bool(true))), 0.0)), 0.0))), 9092.3077, 3.7, 4.0) + vec4(425.749, 7.7, 88.14, 65.30))))[0]) / 1.0), (_GLF_FUZZED((vec4(_GLF_IDENTITY(-74.84, float(mat2x4(_GLF_IDENTITY(-74.84, max(-74.84, -74.84)), 1.0, 0.0, log(1.0), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED((-5.3 / -7.6))), float(0.0), bool(true))), 0.0)), 0.0))), 9092.3077, 3.7, 4.0) + vec4(425.749, 7.7, 88.14, 65.30))))[1], (_GLF_FUZZED((vec4(_GLF_IDENTITY(-74.84, float(mat2x4(_GLF_IDENTITY(-74.84, max(-74.84, -74.84)), 1.0, 0.0, log(1.0), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED((-5.3 / -7.6))), float(0.0), bool(true))), 0.0)), 0.0))), 9092.3077, 3.7, 4.0) + vec4(425.749, 7.7, 88.14, 65.30))))[2], (_GLF_FUZZED((vec4(_GLF_IDENTITY(-74.84, float(mat2x4(_GLF_IDENTITY(-74.84, max(-74.84, -74.84)), 1.0, 0.0, log(1.0), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED((-5.3 / -7.6))), float(0.0), bool(true))), 0.0)), 0.0))), 9092.3077, 3.7, 4.0) + vec4(425.749, 7.7, 88.14, 65.30))))[3]), bvec4(true, true, true, true)));

layout(push_constant) uniform buf_push {
 vec2 GLF_live0resolution;
};
bool GLF_live0checkSwap(float GLF_live0a, float GLF_live0b)
{
 return _GLF_IDENTITY(_GLF_IDENTITY(GLF_live0gl_FragCoord.y < GLF_live0resolution.y / 2.0 ? _GLF_IDENTITY(GLF_live0a, (false ? _GLF_FUZZED(GLF_live0a) : GLF_live0a)) > GLF_live0b : GLF_live0a < _GLF_IDENTITY(GLF_live0b, (GLF_live0b) + 0.0), (GLF_live0gl_FragCoord.y < GLF_live0resolution.y / 2.0 ? _GLF_IDENTITY(GLF_live0a, (false ? _GLF_FUZZED(GLF_live0a) : GLF_live0a)) > GLF_live0b : GLF_live0a < _GLF_IDENTITY(GLF_live0b, (GLF_live0b) + 0.0)) && true), (GLF_live0gl_FragCoord.y < GLF_live0resolution.y / 2.0 ? GLF_live0a > GLF_live0b : GLF_live0a < GLF_live0b) || false);
}
precision highp float;

precision highp int;

struct GLF_live1QuicksortObject {
 int numbers[10];
} ;

GLF_live1QuicksortObject GLF_live1obj = _GLF_FUZZED(GLF_live1QuicksortObject(int[10](4661, 20697, 9867, 23856, 96705, -65415, -11662, 80614, 78585, 29668)));

void GLF_live1swap(int GLF_live1i, int GLF_live1j)
{
 int GLF_live1temp = GLF_live1obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(_GLF_IDENTITY(GLF_live1i, (_GLF_IDENTITY(GLF_live1i, 0 | (GLF_live1i))) ^ (0 >> _GLF_IDENTITY(int(8), int(8)))), 10)];
 if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
  return;
 for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(0), int(0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (((1 | 1) << _GLF_IDENTITY(int(1), _GLF_IDENTITY(int(1), 0 + (int(1))))) >> _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter ++)
  {
   GLF_live1obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i, 10)] = GLF_live1obj.numbers[_GLF_IDENTITY(_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j, 10), (_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j, 10)) - 0)];
  }
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   _GLF_IDENTITY(GLF_live1obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j, 10)] = GLF_live1temp, int(_GLF_ZERO(0.0, injectionSwitch.x)) + (GLF_live1obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j, 10)] = GLF_live1temp));
  }
}
int GLF_live1performPartition(int GLF_live1l, int GLF_live1h)
{
 int GLF_live1pivot = GLF_live1obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1h, 10)];
 if(_GLF_DEAD(false))
  return 1;
 int GLF_live1i = GLF_live1l - 1;
 {
  int GLF_live1_looplimiter0 = 0;
  for(int GLF_live1j = GLF_live1l; GLF_live1j <= GLF_live1h - 1; GLF_live1j ++)
   {
    if(GLF_live1_looplimiter0 >= 6)
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       break;
      break;
     }
    GLF_live1_looplimiter0 ++;
    if(GLF_live1obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j, _GLF_IDENTITY(10, max(10, 10)))] <= GLF_live1pivot)
     {
      {
       vec2 GLF_live2pos = _GLF_FUZZED((vec2(6.8, _GLF_IDENTITY(-9.2, mix(float(_GLF_FUZZED(vec4(1456.1046, 3.3, 5.2, 719.677).y)), float(-9.2), bool(true)))) * vec2(-3814.8777, -72.95)));
       int GLF_live2i = _GLF_FUZZED((8132 + (-95828 | 61079)));
       int GLF_live2_looplimiter0 = 0;
       vec4 GLF_live2res = _GLF_FUZZED((-676.807 + vec4(2277.0196, _GLF_IDENTITY(-9819.4159, (_GLF_IDENTITY(-9819.4159, min(-9819.4159, -9819.4159))) + 0.0), -43.92, 0.8)));
       {
        if(GLF_live2_looplimiter0 >= 3)
         {
          if(_GLF_DEAD(false))
           break;
          1;
          if(_GLF_DEAD(false))
           break;
          {
           bool GLF_live7canwalk = _GLF_FUZZED(true);
           int GLF_live7i = _GLF_FUZZED(ivec3(-3412, 27872, 11073).g);
           ivec2 GLF_live7p = _GLF_FUZZED(ivec2(374, 8903));
           {
            GLF_live7canwalk = false;
            int GLF_live7j = _GLF_FUZZED((++ GLF_live7i));
            {
             int GLF_live7_looplimiter2 = 0;
             for(             GLF_live7i = 0;
 GLF_live7i < 8; GLF_live7i ++)
              {
               if(GLF_live7_looplimiter2 >= 3)
                {
                 break;
                }
               GLF_live7_looplimiter2 ++;
               {
                int GLF_live7_looplimiter1 = 0;
                for(                GLF_live7j = 0;
 GLF_live7j < 8; GLF_live7j ++)
                 {
                  if(_GLF_DEAD(false))
                   break;
                  if(GLF_live7_looplimiter1 >= 3)
                   {
                    break;
                   }
                  GLF_live7_looplimiter1 ++;
                  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   discard;
                  if(GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7j * 2 + GLF_live7i * 2 * 16, 256)] == 0)
                   {
                    GLF_live7p.x = GLF_live7j * 2;
                    for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                     {
                      GLF_live7p.y = GLF_live7i * 2;
                     }
                    if(_GLF_DEAD(false))
                     return 1;
                    GLF_live7canwalk = true;
                   }
                 }
               }
              }
            }
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
             {
              GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live7p.x) + (GLF_live7p.y) * 16, 256)] = 1;
             }
            else
             {
             }
           }
          }
         }
        for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
         {
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            if(_GLF_DEAD(false))
             continue;
            if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             {
             }
            else
             {
              GLF_live2_looplimiter0 ++;
             }
            {
             int GLF_live8_looplimiter0 = 0;
             if(GLF_live8_looplimiter0 >= 3)
              {
               for(int _injected_loop_counter = (0 | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 ^ int(_GLF_ONE(1.0, injectionSwitch.y)))); _injected_loop_counter ++)
                {
                 1;
                }
              }
            }
           }
          else
           {
           }
         }
        if(GLF_live2collision(GLF_live2pos, _GLF_IDENTITY(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)], (GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)]) * mat4(1.0))))
         {
          GLF_live2res = GLF_live2pal[_GLF_MAKE_IN_BOUNDS_INT((int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].x) * int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].y) + GLF_live2i * 9 + 11) % 16, 16)];
          {
           vec2 GLF_live9coord = _GLF_FUZZED(vec2(2227.8593, 5712.3467));
           if(GLF_live9coord.y > 1.0)
            GLF_live9coord.y -= 1.0;
          }
         }
       }
      }
      GLF_live1i ++;
      do
       {
        if(_GLF_DEAD(false))
         return 1;
        GLF_live1swap(GLF_live1i, GLF_live1j);
       }
      while(_GLF_WRAPPED_LOOP(false));
     }
    if(_GLF_DEAD(false))
     {
      {
       int GLF_live9i = _GLF_FUZZED(GLF_live4N);
       int GLF_live9_looplimiter0 = 0;
       vec2 GLF_live9coord = _GLF_FUZZED(vec2(0.5, -8516.4613));
       while(GLF_live9i < 1 && GLF_live9coord.x > 1.0 || GLF_live9coord.y > 1.0)
        {
         if(GLF_live9_looplimiter0 >= 3)
          {
           break;
          }
         GLF_live9_looplimiter0 ++;
         if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, ! (! (false)))))
          {
          }
         else
          {
           if(GLF_live9coord.x > 1.0)
            {
             for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               GLF_live9coord.x -= 1.0;
              }
            }
          }
         if(GLF_live9coord.y > 1.0)
          GLF_live9coord.y -= 1.0;
         GLF_live9coord *= 2.0;
         GLF_live9i ++;
        }
      }
      break;
     }
   }
  if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), true && (_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, (_GLF_IDENTITY(gl_FragCoord.x, (gl_FragCoord.x) * 1.0)) + 0.0) < 0.0))))))
   {
    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
     }
    else
     {
      if(_GLF_DEAD(false))
       return 1;
     }
    return 1;
   }
  if(_GLF_DEAD(false))
   return 1;
  for(int _injected_loop_counter = ((1 ^ 0) & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
   {
    {
     vec2 GLF_live3coord = _GLF_IDENTITY(GLF_live3gl_FragCoord.xy, _GLF_IDENTITY((GLF_live3gl_FragCoord.xy) - abs(vec2(0.0, 0.0)), vec2(mat3x4((GLF_live3gl_FragCoord.xy) - abs(vec2(0.0, 0.0)), _GLF_IDENTITY(dot(vec4(0.0, 0.0, 1.0, _GLF_IDENTITY(dot(vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0)), dot(vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0)))), vec4(1.0, 1.0, 0.0, 1.0)), dot(vec4(0.0, 0.0, 1.0, _GLF_IDENTITY(dot(vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0)), dot(vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0)))), vec4(1.0, 1.0, 0.0, 1.0))), 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)))) * (_GLF_IDENTITY(1.0 / 256.0, float(vec3(1.0 / 256.0, tan(0.0), 0.0))));
     {
      int GLF_live6_looplimiter2 = 0;
      if(GLF_live6_looplimiter2 >= 5)
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         continue;
        1;
       }
     }
     float GLF_live3uvstep = 1.0 / 256.0;
     vec4 GLF_live3res = vec4(0);
     {
      if(_GLF_DEAD(false))
       discard;
      int GLF_live3_looplimiter1 = 0;
      for(int GLF_live3i = 0; GLF_live3i < 3; GLF_live3i ++)
       {
        if(_GLF_DEAD(false))
         continue;
        if(_GLF_IDENTITY(GLF_live3_looplimiter1 >= 4, bool(_GLF_IDENTITY(bvec3(_GLF_IDENTITY(GLF_live3_looplimiter1 >= 4, (GLF_live3_looplimiter1 >= 4) && true), true, true), bvec3(bvec3(bvec3(_GLF_IDENTITY(GLF_live3_looplimiter1 >= 4, (GLF_live3_looplimiter1 >= 4) && true), true, true)))))))
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           return 1;
          break;
         }
        {
         vec2 GLF_live9coord = _GLF_FUZZED(vec2(842.364, -6663.1895));
         if(GLF_live9coord.y > 1.0)
          GLF_live9coord.y -= 1.0;
        }
        if(_GLF_DEAD(false))
         return 1;
        if(_GLF_DEAD(false))
         break;
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          GLF_live3_looplimiter1 ++;
         }
        else
         {
         }
        do
         {
          int GLF_live3_looplimiter0 = 0;
          if(_GLF_DEAD(false))
           continue;
          for(int _injected_loop_counter = (0 & -47583); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 | 1)); _injected_loop_counter ++)
           {
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             discard;
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
             {
              for(int GLF_live3j = 0; GLF_live3j < 3; GLF_live3j ++)
               {
                if(_GLF_DEAD(false))
                 continue;
                if(GLF_live3_looplimiter0 >= 4)
                 {
                  break;
                  if(_GLF_DEAD(false))
                   break;
                 }
                if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                 {
                 }
                else
                 {
                  GLF_live3_looplimiter0 ++;
                 }
                GLF_live3res += texture(GLF_live3tex, GLF_live3coord + vec2(float(GLF_live3i - 1) * GLF_live3uvstep, float(GLF_live3j - 1) * GLF_live3uvstep)) * GLF_live3weights[_GLF_MAKE_IN_BOUNDS_INT(GLF_live3i * 3 + GLF_live3j, 9)];
               }
             }
            else
             {
             }
           }
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           {
            if(_GLF_DEAD(false))
             break;
            discard;
           }
         }
        while(_GLF_WRAPPED_LOOP(false));
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
      continue;
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       if(_GLF_DEAD(false))
        discard;
      }
     {
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         1;
        }
       else
        {
        }
      }
     }
     do
      {
       _GLF_IDENTITY(GLF_live3_GLF_color = vec4(GLF_live3res.xyz, 1.0), (true ? GLF_live3_GLF_color = vec4(GLF_live3res.xyz, 1.0) : _GLF_FUZZED(GLF_live3gl_FragCoord)));
      }
     while(_GLF_WRAPPED_LOOP(false));
    }
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(false))
       {
        {
         int GLF_live8_looplimiter0 = 0;
         if(GLF_live8_looplimiter0 >= 3)
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             1;
            }
          }
        }
        continue;
       }
      return 1;
     }
   }
 }
 do
  {
   GLF_live1i ++;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 GLF_live1swap(GLF_live1i, GLF_live1h);
 do
  {
   if(_GLF_DEAD(false))
    {
     for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY((0 ^ (1 & 1)), min((0 ^ (1 & 1)), (0 ^ (1 & 1))))); _injected_loop_counter ++)
      {
       return 1;
      }
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 return GLF_live1i;
 {
  float GLF_live4grey = _GLF_FUZZED(0.9);
  {
   if(int(GLF_live4gl_FragCoord[1]) < 150)
    {
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        return 1;
       {
        {
         vec2 GLF_live8pos = GLF_live8gl_FragCoord.xy / GLF_live8resolution;
         ivec2 GLF_live8lin = ivec2(int(GLF_live8pos.x * 10.0), int(GLF_live8pos.y * 10.0));
         int GLF_live8iters = GLF_live8lin.x + GLF_live8lin.y * 10;
         if(_GLF_DEAD(false))
          return 1;
         int GLF_live8v = 100;
         int GLF_live8i = _GLF_FUZZED(GLF_live8iters);
         {
          int GLF_live8_looplimiter0 = 0;
          for(          GLF_live8i = 0;
 GLF_live8i < GLF_live8iters; GLF_live8i ++)
           {
            if(GLF_live8_looplimiter0 >= 3)
             {
              break;
             }
            GLF_live8_looplimiter0 ++;
            GLF_live8v = (4 * GLF_live8v * (1000 - GLF_live8v)) / 1000;
           }
         }
         if(_GLF_DEAD(false))
          return 1;
         GLF_live8_GLF_color = GLF_live8pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8v % 16, 16)];
        }
       }
       1;
      }
    }
   else
    {
     if(int(GLF_live4gl_FragCoord[1]) < 180)
      {
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return 1;
        }
       else
        {
         if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), bool(_GLF_IDENTITY(bool(_GLF_FALSE(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), false || (_GLF_IDENTITY(! (false), ! (! (! (false)))))))), (gl_FragCoord.x < 0.0))), false || (bool(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))))
          {
           do
            {
             return 1;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
          }
        }
       GLF_live4grey = 0.5 + _GLF_IDENTITY(float(_GLF_IDENTITY(GLF_live4data[5], (GLF_live4data[5]) - 0)) / 10.0, (float(GLF_live4data[5]) / 10.0) / 1.0);
      }
     else
      {
       if(int(GLF_live4gl_FragCoord[1]) < 210)
        {
         {
          int GLF_live6_looplimiter1 = 0;
          for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), _GLF_IDENTITY(int(2), int(ivec4(int(2), 1, 0, 0))))); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
           {
            if(GLF_live6_looplimiter1 >= 5)
             {
              1;
             }
           }
         }
         GLF_live4grey = 0.5 + float(GLF_live4data[6]) / 10.0;
        }
       else
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch, vec2(injectionSwitch[0], injectionSwitch[1])).x > injectionSwitch.y))))
          return 1;
         if(int(GLF_live4gl_FragCoord[1]) < 240)
          {
           GLF_live4grey = 0.5 + float(GLF_live4data[7]) / 10.0;
           if(_GLF_DEAD(false))
            return 1;
          }
         else
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
              {
               return 1;
              }
            }
           do
            {
             if(int(GLF_live4gl_FragCoord[1]) < 270)
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  return 1;
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  return 1;
                }
               else
                {
                }
               GLF_live4grey = 0.5 + float(GLF_live4data[8]) / 10.0;
              }
             else
              {
               1;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                  {
                   return 1;
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    continue;
                  }
                }
              }
            }
           while(_GLF_WRAPPED_LOOP(false));
          }
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
        {
         if(_GLF_DEAD(false))
          return 1;
         return 1;
        }
      }
    }
  }
 }
}
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 5) uniform sampler2D tex;

void main()
{
 vec4 GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep;
 vec3 GLF_merged2_0_2_5_2_1_5coordslope;
 int i = 0;
 vec2 uvstep = vec2(1.0) * (1.0 / _GLF_IDENTITY(256.0, mix(float(_GLF_FUZZED(5.1)), float(256.0), bool(true))));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return;
 GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.zw = uvstep;
 float slope = 2.0 / 256.0;
 do
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, (false ? _GLF_FUZZED(GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep) : _GLF_IDENTITY(gl_FragCoord, max(gl_FragCoord, gl_FragCoord)))).x < _GLF_IDENTITY(_GLF_IDENTITY(dot(vec2(1.0, 1.0), vec2(_GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0)), dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0))), 0.0)), (_GLF_IDENTITY(dot(vec2(1.0, 1.0), vec2(_GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0)), dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0))), 0.0)), (_GLF_IDENTITY(dot(vec2(1.0, 1.0), vec2(_GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0)), dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0))), 0.0)), 0.0 + (dot(vec2(1.0, 1.0), vec2(_GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(_GLF_IDENTITY(0.0, clamp(0.0, 0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(814.085)), float(_GLF_IDENTITY(0.0, max(0.0, 0.0))), bool(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))))), 1.0, 0.0, 1.0)), dot(vec4(_GLF_IDENTITY(1.0, mix(float(1.0), float(_GLF_FUZZED(-7.6)), bool(false))), 0.0, _GLF_IDENTITY(1.0, clamp(1.0, 1.0, 1.0)), 0.0), vec4(0.0, 1.0, 0.0, 1.0))), 0.0))))) - sin(0.0))) + 0.0), dot(vec2(1.0, 1.0), vec2(_GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 0.0), _GLF_IDENTITY(vec4(0.0, 1.0, 0.0, 1.0), clamp(vec4(0.0, 1.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0)))), dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, 1.0, 0.0, 1.0))), 0.0)))))))
    return;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 do
  {
   GLF_merged2_0_2_5_2_1_5coordslope.z = slope;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(bool(_GLF_IDENTITY(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0))), _GLF_IDENTITY(bvec2(_GLF_IDENTITY(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))), bvec2(bvec2(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))), bvec2(bvec2(bvec2(_GLF_IDENTITY(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))), bvec2(bvec2(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0))))))))))))), (bool(_GLF_IDENTITY(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0))), _GLF_IDENTITY(bvec2(_GLF_IDENTITY(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))), bvec2(bvec2(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))), bvec2(bvec2(bvec2(_GLF_IDENTITY(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))), bvec2(bvec2(bvec2(bvec2(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))))))))) || false)), (injectionSwitch.x > injectionSwitch.y))));
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
  {
   GLF_merged2_0_2_5_2_1_5coordslope.xy = coord;
  }
 float refh = texture(tex, _GLF_IDENTITY(GLF_merged2_0_2_5_2_1_5coordslope.xy, mix(vec2(_GLF_FUZZED(5.2), (GLF_merged2_0_2_5_2_1_5coordslope.xy)[1]), vec2((_GLF_IDENTITY(GLF_merged2_0_2_5_2_1_5coordslope, mix(vec3(_GLF_FUZZED(53.42), (GLF_merged2_0_2_5_2_1_5coordslope)[1], _GLF_FUZZED(9239.2347)), vec3((GLF_merged2_0_2_5_2_1_5coordslope)[0], _GLF_FUZZED(-7156.9883), (GLF_merged2_0_2_5_2_1_5coordslope)[2]), bvec3(true, false, true))).xy)[0], _GLF_FUZZED(-60.88)), bvec2(true, false)))).y;
 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 & 1)); _injected_loop_counter ++)
  {
   GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.y = refh;
  }
 GLF_merged2_0_2_5_2_1_5coordslope.xy -= GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.zw;
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
    }
   else
    {
     GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.y += GLF_merged2_0_2_5_2_1_5coordslope.z;
    }
  }
 float h = _GLF_IDENTITY(texture(tex, GLF_merged2_0_2_5_2_1_5coordslope.xy).y, (texture(tex, GLF_merged2_0_2_5_2_1_5coordslope.xy).y) / 1.0);
 _GLF_IDENTITY(GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.x = h, (false ? _GLF_FUZZED(-66.99) : GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.x = h));
 if(_GLF_DEAD(false))
  {
   {
    {
     int GLF_live8i = _GLF_FUZZED(41046);
     int GLF_live8v = _GLF_FUZZED((-73049 * GLF_live4N));
     int GLF_live8iters = _GLF_FUZZED((-31668 - GLF_live4N));
     int GLF_live8_looplimiter0 = 0;
     for(     GLF_live8i = 0;
 GLF_live8i < GLF_live8iters; GLF_live8i ++)
      {
       if(GLF_live8_looplimiter0 >= 3)
        {
         break;
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
        continue;
       for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
        {
         GLF_live8_looplimiter0 ++;
        }
       GLF_live8v = (4 * GLF_live8v * (1000 - GLF_live8v)) / 1000;
      }
    }
    float GLF_live0data[10] = _GLF_FUZZED(float[10](-8.3, 4182.0033, -3281.4103, _GLF_IDENTITY((-9.5 - -9431.0413), max((-9.5 - -9431.0413), _GLF_IDENTITY((-9.5 - -9431.0413), 1.0 * ((-9.5 - -9431.0413))))), -699.040, -9.5, (5.9 + _GLF_IDENTITY(-588.719, (false ? _GLF_FUZZED(-9196.3643) : -588.719))), vec4(49.88, -6546.0891, -0.9, _GLF_IDENTITY(_GLF_IDENTITY(-980.116, mix(float(-980.116), float(_GLF_FUZZED(92.10)), bool(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))) && true)))), 0.0 + (-980.116))).r, 60.94, -3281.4103));
    if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec4(false, true, _GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, _GLF_IDENTITY(injectionSwitch, _GLF_IDENTITY(vec2(vec3(injectionSwitch, 1.0)), min(vec2(vec3(injectionSwitch, 1.0)), vec2(vec3(injectionSwitch, 1.0))))), injectionSwitch)).y)), false)))))
     {
      if(_GLF_WRAPPED_IF_FALSE(false))
       {
       }
      else
       {
        {
         int GLF_live9i = _GLF_FUZZED(5448);
         int GLF_live9_looplimiter0 = 0;
         vec2 GLF_live9coord = _GLF_FUZZED((vec2(-5289.7825, 8070.2513) / vec2(-9.3, -0.6)));
         while(GLF_live9i < 1 && GLF_live9coord.x > 1.0 || GLF_live9coord.y > 1.0)
          {
           if(GLF_live9_looplimiter0 >= 3)
            {
             break;
            }
           GLF_live9_looplimiter0 ++;
           if(GLF_live9coord.x > 1.0)
            GLF_live9coord.x -= 1.0;
           if(GLF_live9coord.y > 1.0)
            GLF_live9coord.y -= 1.0;
           GLF_live9coord *= 2.0;
           GLF_live9i ++;
          }
        }
        return;
       }
     }
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         return;
        }
       else
        {
        }
      }
     int GLF_live0_looplimiter2 = 0;
     for(int GLF_live0i = 0; GLF_live0i < 9; GLF_live0i ++)
      {
       if(GLF_live0_looplimiter2 >= 7)
        {
         break;
        }
       if(_GLF_DEAD(false))
        break;
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return;
         GLF_live0_looplimiter2 ++;
         if(_GLF_DEAD(false))
          break;
        }
       else
        {
         if(_GLF_DEAD(false))
          return;
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
          }
         else
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return;
          }
        }
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
        }
       else
        {
         int GLF_live0_looplimiter1 = 0;
         if(_GLF_DEAD(false))
          return;
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (_GLF_IDENTITY(0, max(0, _GLF_IDENTITY(0, (0) | (0)))) << _GLF_IDENTITY(int(3), int(3)))); _injected_loop_counter --)
          {
           for(int GLF_live0j = 0; GLF_live0j < 10; GLF_live0j ++)
            {
             if(GLF_live0_looplimiter1 >= 7)
              {
               if(_GLF_DEAD(false))
                discard;
               if(_GLF_DEAD(false))
                break;
               break;
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   discard;
                   do
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      discard;
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                  }
                }
              }
             do
              {
               GLF_live0_looplimiter1 ++;
              }
             while(_GLF_WRAPPED_LOOP(false));
             if(_GLF_IDENTITY(GLF_live0j, (GLF_live0j) - 0) < GLF_live0i + 1)
              {
               continue;
              }
             bool GLF_live0doSwap = GLF_live0checkSwap(GLF_live0data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0i, 10)], GLF_live0data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0j, 10)]);
             if(GLF_live0doSwap)
              {
               float GLF_live0temp = GLF_live0data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0i, 10)];
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                {
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, mix(float(injectionSwitch.x), float(_GLF_FUZZED(-5.6)), bool(false))) > injectionSwitch.y))))
                  break;
                 GLF_live0data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0i, 10)] = GLF_live0data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0j, 10)];
                }
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, (gl_FragCoord.x) / 1.0) < 0.0))))
                {
                }
               else
                {
                 GLF_live0data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0j, 10)] = GLF_live0temp;
                }
               if(_GLF_DEAD(false))
                discard;
              }
            }
          }
        }
      }
    }
   }
   if(_GLF_DEAD(false))
    return;
   return;
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     return;
    ivec2 GLF_live7p = _GLF_FUZZED(ivec2(85638, -26075));
    int GLF_live7directions = _GLF_FUZZED(int(false));
    if(GLF_live7p.y < 14 && GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live7p.x) + (GLF_live7p.y + 2) * 16, 256)] == 0)
     {
      GLF_live7directions += 1;
     }
   }
  }
 {
  int GLF_live7j = _GLF_FUZZED((GLF_live4N));
  bool GLF_live7canwalk = _GLF_FUZZED(false);
  int GLF_live7i = _GLF_FUZZED((57103 * 86799));
  ivec2 GLF_live7p = _GLF_FUZZED(ivec2(45313, 86426));
  int GLF_live7_looplimiter1 = 0;
  {
   if(GLF_live7_looplimiter1 >= 3)
    {
     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(6), int(6))) >> _GLF_IDENTITY(int(6), int(6)))); _injected_loop_counter ++)
      {
       1;
      }
     if(_GLF_DEAD(false))
      return;
    }
   GLF_live7_looplimiter1 ++;
   if(GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7j * 2 + GLF_live7i * 2 * 16, 256)] == 0)
    {
     GLF_live7p.x = GLF_live7j * 2;
     GLF_live7p.y = GLF_live7i * 2;
     GLF_live7canwalk = true;
    }
  }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   return;
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   do
    {
     return;
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
   if(_GLF_DEAD(false))
    return;
   {
    vec2 GLF_live9coord = _GLF_FUZZED(vec2(19.13, -4261.2971));
    if(_GLF_DEAD(false))
     return;
    if(GLF_live9coord.x > 1.0)
     GLF_live9coord.x -= 1.0;
   }
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     {
      int GLF_live6treeIndex = _GLF_FUZZED((GLF_live4N | GLF_live4N));
      int GLF_live6baseIndex = _GLF_FUZZED((GLF_live4N * (GLF_live4N * -16363)));
      int GLF_live6data = _GLF_FUZZED(GLF_live4N);
      for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), _GLF_IDENTITY(int(5), (int(5)) | (int(5))))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (int(_GLF_ZERO(0.0, injectionSwitch.x)) << _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter --)
       {
        int GLF_live6_looplimiter0 = 0;
        while(GLF_live6baseIndex <= GLF_live6treeIndex)
         {
          if(GLF_live6_looplimiter0 >= 5)
           {
            break;
           }
          GLF_live6_looplimiter0 ++;
          if(GLF_live6data <= GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].data)
           {
            if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex == - 1)
             {
              GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex = GLF_live6treeIndex;
              for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
               {
                GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
               }
              1;
             }
            else
             {
              for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
               {
                GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex;
               }
              continue;
             }
           }
          else
           {
            if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex == - 1)
             {
              if(_GLF_WRAPPED_IF_FALSE(false))
               {
               }
              else
               {
                if(_GLF_DEAD(false))
                 discard;
                GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex = GLF_live6treeIndex;
               }
              GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
              1;
             }
            else
             {
              GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex;
              continue;
             }
           }
         }
       }
     }
     if(_GLF_IDENTITY(_GLF_DEAD(false), ! (_GLF_IDENTITY(! (_GLF_DEAD(false)), ! (! (! (_GLF_DEAD(false))))))))
      return;
     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
      {
       if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.x < 0.0), (_GLF_IDENTITY((gl_FragCoord.x < 0.0), bool(bvec3((gl_FragCoord.x < 0.0), true, true)))) && true))))
        {
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           return;
          }
         {
          {
           vec2 GLF_live9coord = GLF_live9gl_FragCoord.xy * (1.0 / 256.0);
           vec4 GLF_live9res = vec4(0.25);
           do
            {
             GLF_live9coord *= 2.0;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))));
           int GLF_live9i = 0;
           {
            int GLF_live9_looplimiter0 = 0;
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
             break;
            while(GLF_live9i < 1 && GLF_live9coord.x > 1.0 || GLF_live9coord.y > 1.0)
             {
              if(GLF_live9_looplimiter0 >= 3)
               {
                break;
               }
              GLF_live9_looplimiter0 ++;
              do
               {
                if(GLF_live9coord.x > 1.0)
                 {
                  for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                   {
                    GLF_live9coord.x -= 1.0;
                    if(_GLF_DEAD(false))
                     return;
                   }
                 }
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                 break;
               }
              while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
              if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
               {
               }
              else
               {
                if(GLF_live9coord.y > 1.0)
                 GLF_live9coord.y -= 1.0;
               }
              if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
               break;
              GLF_live9coord *= 2.0;
              GLF_live9i ++;
             }
           }
           if(GLF_live9coord.x < 1.0 && GLF_live9coord.y < 1.0)
            {
             GLF_live9res = texture(GLF_live9tex, GLF_live9coord);
            }
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              continue;
            }
           else
            {
             GLF_live9_GLF_color = vec4(GLF_live9res.xyz, 1.0);
            }
          }
         }
        }
      }
     {
      int GLF_live5i = _GLF_FUZZED(-17214);
      vec2 GLF_live5coord = _GLF_FUZZED(_GLF_IDENTITY(vec2(443.074, 2.5), min(vec2(443.074, 2.5), vec2(443.074, 2.5))));
      if(_GLF_DEAD(false))
       return;
      vec4 GLF_live5texel = _GLF_FUZZED(vec4(-9906.1528, -4.9, -8865.8345, 49.28));
      {
       int GLF_live5_looplimiter0 = 0;
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         if(_GLF_DEAD(false))
          return;
        }
       else
        {
         while(GLF_live5texel.x + GLF_live5texel.y + GLF_live5texel.z > 1.0 && GLF_live5i < 16)
          {
           if(_GLF_IDENTITY(GLF_live5_looplimiter0 >= 6, bool(bvec4(_GLF_IDENTITY(GLF_live5_looplimiter0 >= 6, (GLF_live5_looplimiter0 >= 6) || false), false, false, true))))
            {
             break;
            }
           GLF_live5_looplimiter0 ++;
           do
            {
             ivec2 GLF_live7p = _GLF_FUZZED(ivec2(-84225, 19877));
             int GLF_live7d = _GLF_FUZZED((- GLF_live4N));
             {
              GLF_live7d --;
              GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live7p.x) + (GLF_live7p.y) * 16, 256)] = 1;
              for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
               {
                GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live7p.x + 1) + (GLF_live7p.y) * 16, 256)] = 1;
               }
              GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live7p.x + 2) + (GLF_live7p.y) * 16, 256)] = 1;
              GLF_live7p.x += 2;
             }
            }
           while(_GLF_WRAPPED_LOOP(false));
           GLF_live5coord = GLF_live5texel.xz + GLF_live5texel.yy;
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (int(_GLF_ZERO(0.0, injectionSwitch.x)) ^ (0 >> _GLF_IDENTITY(int(3), int(3))))); _injected_loop_counter --)
              {
               GLF_live5coord = floor(GLF_live5coord * 256.0) / 256.0;
               if(_GLF_DEAD(false))
                break;
              }
            }
           else
            {
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            break;
           GLF_live5texel = texture(GLF_live5tex, GLF_live5coord);
           for(int _injected_loop_counter = _GLF_IDENTITY(0, 0 + (0)); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2)))); _injected_loop_counter ++)
            {
             GLF_live5i ++;
            }
          }
        }
      }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return;
     while(_GLF_IDENTITY(GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.x < GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.y && i < 32, bool(_GLF_IDENTITY(bvec3(GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.x < GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.y && i < 32, _GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), ! (! (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))), true), bvec3(bvec3(bvec3(GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.x < GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.y && i < 32, _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), true)))))))
      {
       if(_GLF_DEAD(false))
        continue;
       GLF_merged2_0_2_5_2_1_5coordslope.xy -= GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.zw;
       GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.y += GLF_merged2_0_2_5_2_1_5coordslope.z;
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         continue;
        float GLF_live4grey = _GLF_FUZZED(-145.941);
        if(int(GLF_live4gl_FragCoord[1]) < _GLF_IDENTITY(30, (30) * 1))
         {
          {
           {
            vec2 GLF_live8pos = GLF_live8gl_FragCoord.xy / GLF_live8resolution;
            ivec2 GLF_live8lin = ivec2(int(GLF_live8pos.x * 10.0), int(GLF_live8pos.y * 10.0));
            int GLF_live8iters = GLF_live8lin.x + GLF_live8lin.y * 10;
            int GLF_live8v = 100;
            int GLF_live8i = _GLF_FUZZED(GLF_live8iters);
            {
             int GLF_live8_looplimiter0 = 0;
             for(             GLF_live8i = 0;
 GLF_live8i < GLF_live8iters; GLF_live8i ++)
              {
               if(GLF_live8_looplimiter0 >= 3)
                {
                 break;
                 if(_GLF_DEAD(false))
                  return;
                }
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(1, max(1, 1))); _injected_loop_counter ++)
                {
                 GLF_live8_looplimiter0 ++;
                }
               GLF_live8v = (4 * GLF_live8v * (1000 - GLF_live8v)) / 1000;
              }
            }
            GLF_live8_GLF_color = GLF_live8pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8v % 16, 16)];
           }
          }
          GLF_live4grey = 0.5 + _GLF_IDENTITY(float(_GLF_IDENTITY(GLF_live4data[0], int(ivec4(_GLF_IDENTITY(GLF_live4data[0], 1 * (GLF_live4data[0])), (1 ^ 1), 0, int(_GLF_ZERO(0.0, injectionSwitch.x)))))) / 10.0, clamp(_GLF_IDENTITY(float(GLF_live4data[0]) / 10.0, mix(float(_GLF_FUZZED(57.93)), float(float(GLF_live4data[0]) / 10.0), _GLF_IDENTITY(bool(true), ! (! (bool(true)))))), float(GLF_live4data[0]) / 10.0, float(GLF_live4data[0]) / 10.0));
          if(_GLF_DEAD(false))
           {
            do
             {
              int GLF_live6treeIndex = _GLF_FUZZED(GLF_live4N);
              int GLF_live6baseIndex = _GLF_FUZZED(-66975);
              int GLF_live6data = _GLF_FUZZED(87179);
              if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex == - 1)
               {
                GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex = GLF_live6treeIndex;
                GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
                if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                 {
                 }
                else
                 {
                  1;
                 }
                if(_GLF_DEAD(false))
                 continue;
               }
              else
               {
                GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex;
                1;
               }
             }
            while(_GLF_WRAPPED_LOOP(false));
            if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
             continue;
            break;
           }
         }
        else
         {
          if(_GLF_IDENTITY(int(GLF_live4gl_FragCoord[1]), ~ (_GLF_IDENTITY(~ (int(GLF_live4gl_FragCoord[1])), 0 ^ (~ (int(GLF_live4gl_FragCoord[1])))))) < 60)
           {
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
             {
              GLF_live4grey = 0.5 + float(GLF_live4data[1]) / 10.0;
             }
            else
             {
             }
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
             continue;
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
             {
              if(_GLF_DEAD(false))
               discard;
              break;
             }
           }
          else
           {
            if(int(GLF_live4gl_FragCoord[1]) < 90)
             {
              GLF_live4grey = 0.5 + float(GLF_live4data[2]) / 10.0;
             }
            else
             {
              if(int(GLF_live4gl_FragCoord[_GLF_IDENTITY(1, max(1, 1))]) < 120)
               {
                if(_GLF_DEAD(false))
                 continue;
                for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                 {
                  GLF_live4grey = 0.5 + float(GLF_live4data[_GLF_IDENTITY(_GLF_IDENTITY(3, max(3, 3)), max(_GLF_IDENTITY(3, max(3, 3)), _GLF_IDENTITY(3, max(3, 3))))]) / 10.0;
                 }
               }
              else
               {
                if(int(GLF_live4gl_FragCoord[1]) < 150)
                 {
                  1;
                  if(_GLF_DEAD(false))
                   discard;
                 }
                else
                 {
                  if(int(GLF_live4gl_FragCoord[1]) < 180)
                   {
                    GLF_live4grey = 0.5 + float(GLF_live4data[_GLF_IDENTITY(5, (5) - 0)]) / 10.0;
                   }
                  else
                   {
                    if(int(GLF_live4gl_FragCoord[1]) < 210)
                     {
                      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                       {
                        if(_GLF_DEAD(false))
                         discard;
                        if(_GLF_DEAD(false))
                         continue;
                        return;
                       }
                      for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
                       {
                        GLF_live4grey = 0.5 + float(GLF_live4data[6]) / 10.0;
                       }
                     }
                    else
                     {
                      {
                       if(_GLF_DEAD(false))
                        return;
                       int GLF_live7_looplimiter2 = 0;
                       int GLF_live7j = _GLF_FUZZED(86491);
                       bool GLF_live7canwalk = _GLF_FUZZED(true);
                       int GLF_live7i = _GLF_FUZZED(GLF_live4N);
                       ivec2 GLF_live7p = _GLF_FUZZED((ivec2(-69582, 9737) & ivec2(38539, -91534)));
                       for(                       GLF_live7i = 0;
 GLF_live7i < 8; GLF_live7i ++)
                        {
                         if(GLF_live7_looplimiter2 >= 3)
                          {
                           break;
                          }
                         GLF_live7_looplimiter2 ++;
                         {
                          int GLF_live7_looplimiter1 = 0;
                          for(                          GLF_live7j = 0;
 GLF_live7j < 8; GLF_live7j ++)
                           {
                            if(GLF_live7_looplimiter1 >= 3)
                             {
                              break;
                             }
                            GLF_live7_looplimiter1 ++;
                            if(GLF_live7map[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7j * 2 + GLF_live7i * 2 * 16, 256)] == 0)
                             {
                              GLF_live7p.x = GLF_live7j * 2;
                              GLF_live7p.y = GLF_live7i * 2;
                              GLF_live7canwalk = true;
                             }
                           }
                         }
                        }
                      }
                      for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                       {
                        if(_GLF_DEAD(false))
                         return;
                        if(int(GLF_live4gl_FragCoord[1]) < 240)
                         {
                          GLF_live4grey = 0.5 + float(GLF_live4data[7]) / 10.0;
                          if(_GLF_DEAD(false))
                           {
                            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                             continue;
                            return;
                           }
                         }
                        else
                         {
                          {
                           int GLF_live8i = _GLF_FUZZED(-4156);
                           int GLF_live8v = _GLF_FUZZED(GLF_live4N);
                           int GLF_live8iters = _GLF_FUZZED(5185);
                           int GLF_live8_looplimiter0 = 0;
                           for(                           GLF_live8i = 0;
 GLF_live8i < GLF_live8iters; GLF_live8i ++)
                            {
                             if(GLF_live8_looplimiter0 >= 3)
                              {
                               break;
                              }
                             if(_GLF_WRAPPED_IF_FALSE(false))
                              {
                              }
                             else
                              {
                               if(_GLF_DEAD(false))
                                return;
                               GLF_live8_looplimiter0 ++;
                              }
                             GLF_live8v = (4 * GLF_live8v * (1000 - GLF_live8v)) / 1000;
                            }
                          }
                          if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, (_GLF_IDENTITY(injectionSwitch.x, (injectionSwitch.x) / _GLF_IDENTITY(dot(vec4(0.0, 0.0, 1.0, 0.0), vec4(0.0, 0.0, 1.0, 0.0)), dot(vec4(0.0, 0.0, 1.0, 0.0), vec4(0.0, 0.0, 1.0, 0.0))))) - 0.0) > injectionSwitch.y))))
                           {
                            if(_GLF_DEAD(false))
                             return;
                           }
                          else
                           {
                            if(int(GLF_live4gl_FragCoord[_GLF_IDENTITY(1, min(1, 1))]) < _GLF_IDENTITY(270, (_GLF_IDENTITY(270, (270) << 0)) * 1))
                             {
                              GLF_live4grey = 0.5 + float(GLF_live4data[8]) / 10.0;
                             }
                            else
                             {
                              _GLF_IDENTITY(1, max(_GLF_IDENTITY(1, max(1, 1)), 1));
                             }
                            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                             break;
                           }
                         }
                       }
                     }
                   }
                  if(_GLF_DEAD(false))
                   return;
                 }
               }
             }
           }
         }
       }
       if(_GLF_DEAD(false))
        break;
       GLF_merged3_0_1_1_1_1_4_2_2_6hrefhuvstep.x = texture(tex, GLF_merged2_0_2_5_2_1_5coordslope.xy).y;
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch.x < injectionSwitch.y, (injectionSwitch.x < injectionSwitch.y) && true)))))
        {
         i ++;
         if(_GLF_DEAD(false))
          break;
        }
       else
        {
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return;
       {
        ivec2 GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top;
        int GLF_live1_looplimiter1 = 0;
        GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.x = GLF_live1_looplimiter1;
        int GLF_live1top = _GLF_FUZZED(70927);
        if(_GLF_DEAD(false))
         break;
        for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
         {
          GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y = GLF_live1top;
         }
        int GLF_live1h = _GLF_FUZZED(((ivec2(-44367, -97109) ^ 95074).r * (56793)));
        int GLF_live1stack[10] = _GLF_FUZZED(int[10](39409, 99870, _GLF_IDENTITY(_GLF_IDENTITY(-51712, (false ? _GLF_FUZZED(GLF_live1_looplimiter1) : _GLF_IDENTITY(-51712, clamp(-51712, -51712, -51712)))), (true ? -51712 : _GLF_FUZZED(floatBitsToInt(refh)))), ivec3(-49889, 46400, 99327).r, (-74806 << 817), -7532, int(false), 41082, 99870, _GLF_IDENTITY(ivec3(-49889, 46400, 99327).r, (_GLF_IDENTITY(ivec3(-49889, 46400, 99327).r, int(ivec4(ivec3(-49889, 46400, 99327).r, 1, int(_GLF_ONE(1.0, injectionSwitch.y)), 0)))) / 1)));
        int GLF_live1l = _GLF_FUZZED((- -89152));
        do
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, bool(bool(gl_FragCoord.y < 0.0)))))))
           break;
          if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           {
           }
          else
           {
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
             break;
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              while(GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y >= 0)
               {
                if(_GLF_DEAD(false))
                 {
                  if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
                   {
                   }
                  else
                   {
                    return;
                   }
                 }
                if(GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.x >= 6)
                 {
                  break;
                 }
                GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.x ++;
                GLF_live1h = GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y --, 10)];
                if(_GLF_DEAD(false))
                 break;
                if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), false || (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))))
                 {
                  GLF_live1l = GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y --, 10)];
                  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   break;
                 }
                else
                 {
                 }
                int GLF_live1p = GLF_live1performPartition(GLF_live1l, GLF_live1h);
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
                  break;
                 int GLF_live5i = _GLF_FUZZED(-86793);
                 vec2 GLF_live5coord = _GLF_IDENTITY(_GLF_FUZZED((-2.7 * vec2(0.0, -10.10))), min(_GLF_FUZZED((-2.7 * vec2(0.0, -10.10))), _GLF_IDENTITY(_GLF_FUZZED((-2.7 * vec2(0.0, -10.10))), (_GLF_IDENTITY(_GLF_FUZZED((-2.7 * vec2(0.0, -10.10))), mat2(1.0) * (_GLF_FUZZED((-2.7 * vec2(0.0, -10.10)))))) / vec2(1.0, 1.0))));
                 int GLF_live5_looplimiter0 = 0;
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, float(mat2(injectionSwitch.y, 0.0, 0.0, 0.0)))))))
                  continue;
                 vec4 GLF_live5texel = _GLF_FUZZED(vec4(-4750.9515, 5.2, 868.191, _GLF_IDENTITY(-59.37, float(vec3(-59.37, tan(0.0), _GLF_ONE(1.0, injectionSwitch.y))))));
                 while(GLF_live5texel.x + GLF_live5texel.y + GLF_live5texel.z > 1.0 && GLF_live5i < 16)
                  {
                   if(GLF_live5_looplimiter0 >= 6)
                    {
                     break;
                    }
                   GLF_live5_looplimiter0 ++;
                   do
                    {
                     GLF_live5coord = GLF_live5texel.xz + GLF_live5texel.yy;
                     if(_GLF_DEAD(false))
                      break;
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                   if(_GLF_DEAD(false))
                    continue;
                   GLF_live5coord = floor(_GLF_IDENTITY(GLF_live5coord * 256.0, _GLF_IDENTITY((GLF_live5coord * 256.0) * mat2(_GLF_ONE(1.0, injectionSwitch.y)), clamp((GLF_live5coord * 256.0) * mat2(_GLF_ONE(1.0, injectionSwitch.y)), (GLF_live5coord * 256.0) * mat2(_GLF_ONE(1.0, injectionSwitch.y)), (GLF_live5coord * 256.0) * mat2(_GLF_ONE(1.0, injectionSwitch.y)))))) / _GLF_IDENTITY(256.0, (256.0) * 1.0);
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                    {
                     GLF_live5texel = texture(GLF_live5tex, GLF_live5coord);
                    }
                   else
                    {
                    }
                   GLF_live5i ++;
                  }
                }
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  if(GLF_live1p - 1 > GLF_live1l)
                   {
                    for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                     {
                      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                       continue;
                      _GLF_IDENTITY(GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y, 10)] = GLF_live1l, (GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y, 10)] = GLF_live1l) - 0);
                     }
                    GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y, 10)] = GLF_live1p - 1;
                   }
                 }
                else
                 {
                 }
                if(_GLF_IDENTITY(GLF_live1p + 1 < GLF_live1h, false || (GLF_live1p + 1 < GLF_live1h)))
                 {
                  GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y, 10)] = GLF_live1p + _GLF_IDENTITY(1, (1) / ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2))));
                  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   return;
                  GLF_live1stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_merged2_0_1_22_1_1_12GLF_live1_looplimiter1GLF_live1top.y, 10)] = GLF_live1h;
                  if(_GLF_DEAD(false))
                   {
                    {
                     {
                      1;
                     }
                    }
                    break;
                   }
                 }
                {
                 int GLF_live6result = _GLF_FUZZED(53013);
                 int GLF_live6count = _GLF_FUZZED(-14340);
                 if(GLF_live6result == - 1)
                  {
                   GLF_live6count ++;
                  }
                }
               }
             }
            else
             {
             }
           }
         }
        while(_GLF_IDENTITY(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))), bool(bvec2(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))), false))));
       }
      }
    }
   else
    {
    }
   {
    {
     if(_GLF_DEAD(false))
      return;
     vec2 GLF_live8pos = GLF_live8gl_FragCoord.xy / GLF_live8resolution;
     if(_GLF_DEAD(false))
      return;
     ivec2 GLF_live8lin = ivec2(int(GLF_live8pos.x * 10.0), int(GLF_live8pos.y * 10.0));
     int GLF_live8iters = GLF_live8lin.x + GLF_live8lin.y * 10;
     int GLF_live8v = 100;
     if(_GLF_DEAD(false))
      return;
     int GLF_live8i = _GLF_FUZZED(GLF_live8iters);
     {
      int GLF_live8_looplimiter0 = 0;
      for(      GLF_live8i = 0;
 GLF_live8i < GLF_live8iters; GLF_live8i ++)
       {
        if(GLF_live8_looplimiter0 >= 3)
         {
          break;
         }
        GLF_live8_looplimiter0 ++;
        for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
         {
          if(_GLF_DEAD(false))
           continue;
          GLF_live8v = (4 * GLF_live8v * (1000 - GLF_live8v)) / 1000;
         }
       }
     }
     GLF_live8_GLF_color = GLF_live8pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8v % 16, 16)];
    }
   }
  }
 else
  {
  }
 {
  do
   {
    1;
   }
  while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 }
 _GLF_color = vec4(vec3(float(i) * _GLF_IDENTITY((1.0 / 32.0), _GLF_IDENTITY(float(_GLF_IDENTITY(mat4x3((1.0 / 32.0), 1.0, 1.0, 0.0, _GLF_IDENTITY(0.0, 0.0 + (0.0)), 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0), (true ? mat4x3((1.0 / 32.0), 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, _GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, float(mat4(1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, log(1.0), 1.0, 1.0, 1.0, 0.0, 1.0, 0.0)))), float(_GLF_FUZZED((-92.31 * 8403.5477))), bool(false))), 0.0, 0.0) : _GLF_FUZZED(mat4x3(-4815.3881, 9.8, 5575.5066, -3269.3990, 21.10, -6314.9373, -72.55, -578.751, -20.89, 2.7, 5.3, -4.1))))), mix(float(float(_GLF_IDENTITY(mat4x3((1.0 / 32.0), 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0), (true ? mat4x3((1.0 / 32.0), 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0) : _GLF_FUZZED(mat4x3(-4815.3881, 9.8, 5575.5066, -3269.3990, 21.10, -6314.9373, -72.55, -578.751, -20.89, 2.7, 5.3, -4.1)))))), float(_GLF_FUZZED(-4520.9538)), bool(false))))), 1.0);
}
