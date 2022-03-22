; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 137
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %67 %118
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data"
               OpName %11 "func(struct-S-i11;"
               OpName %10 "s"
               OpName %17 "arr"
               OpName %20 "buf0"
               OpMemberName %20 0 "_GLF_uniform_int_values"
               OpName %22 ""
               OpName %58 "a"
               OpName %67 "gl_FragCoord"
               OpName %79 "v"
               OpName %105 "param"
               OpName %118 "_GLF_color"
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %67 BuiltIn FragCoord
               OpDecorate %118 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %2 %8
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 10
         %15 = OpTypeArray %7 %14
         %16 = OpTypePointer Function %15
         %18 = OpConstant %13 4
         %19 = OpTypeArray %6 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpConstant %6 0
         %24 = OpConstant %6 2
         %25 = OpTypePointer Uniform %6
         %57 = OpTypePointer Function %6
         %64 = OpTypeFloat 32
         %65 = OpTypeVector %64 4
         %66 = OpTypePointer Input %65
         %67 = OpVariable %66 Input
         %68 = OpConstant %13 0
         %69 = OpTypePointer Input %64
         %72 = OpConstant %64 0
         %73 = OpTypeBool
         %77 = OpTypeVector %6 2
         %78 = OpTypePointer Function %77
         %80 = OpConstant %6 3
         %87 = OpConstant %6 -1
         %95 = OpConstant %6 1
         %97 = OpConstant %13 1
        %117 = OpTypePointer Output %65
        %118 = OpVariable %117 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %17 = OpVariable %16 Function
         %58 = OpVariable %57 Function
         %79 = OpVariable %78 Function
        %105 = OpVariable %8 Function
         %26 = OpAccessChain %25 %22 %23 %24
         %27 = OpLoad %6 %26
         %28 = OpCompositeConstruct %7 %27
         %29 = OpAccessChain %25 %22 %23 %24
         %30 = OpLoad %6 %29
         %31 = OpCompositeConstruct %7 %30
         %32 = OpAccessChain %25 %22 %23 %24
         %33 = OpLoad %6 %32
         %34 = OpCompositeConstruct %7 %33
         %35 = OpAccessChain %25 %22 %23 %24
         %36 = OpLoad %6 %35
         %37 = OpCompositeConstruct %7 %36
         %38 = OpAccessChain %25 %22 %23 %24
         %39 = OpLoad %6 %38
         %40 = OpCompositeConstruct %7 %39
         %41 = OpAccessChain %25 %22 %23 %24
         %42 = OpLoad %6 %41
         %43 = OpCompositeConstruct %7 %42
         %44 = OpAccessChain %25 %22 %23 %24
         %45 = OpLoad %6 %44
         %46 = OpCompositeConstruct %7 %45
         %47 = OpAccessChain %25 %22 %23 %24
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %7 %48
         %50 = OpAccessChain %25 %22 %23 %24
         %51 = OpLoad %6 %50
         %52 = OpCompositeConstruct %7 %51
         %53 = OpAccessChain %25 %22 %23 %24
         %54 = OpLoad %6 %53
         %55 = OpCompositeConstruct %7 %54
         %56 = OpCompositeConstruct %15 %28 %31 %34 %37 %40 %43 %46 %49 %52 %55
               OpStore %17 %56
         %59 = OpAccessChain %25 %22 %23 %23
         %60 = OpLoad %6 %59
               OpStore %58 %60
         %61 = OpLoad %6 %58
         %62 = OpAccessChain %57 %17 %61 %23
         %63 = OpLoad %6 %62
               OpStore %58 %63
         %70 = OpAccessChain %69 %67 %68
         %71 = OpLoad %64 %70
         %74 = OpFOrdLessThan %73 %71 %72
               OpSelectionMerge %76 None
               OpBranchConditional %74 %75 %76
         %75 = OpLabel
         %81 = OpAccessChain %25 %22 %23 %80
         %82 = OpLoad %6 %81
         %83 = OpCompositeConstruct %77 %82 %82
         %84 = OpLoad %6 %58
         %85 = OpCompositeConstruct %77 %84 %84
         %86 = OpBitwiseAnd %77 %83 %85
         %88 = OpCompositeConstruct %77 %87 %87
         %89 = OpSMod %77 %86 %88
               OpStore %79 %89
               OpBranch %90
         %90 = OpLabel
               OpLoopMerge %92 %93 None
               OpBranch %91
         %91 = OpLabel
         %94 = OpLoad %6 %58
         %96 = OpIAdd %6 %94 %95
               OpStore %58 %96
               OpBranch %93
         %93 = OpLabel
         %98 = OpAccessChain %57 %79 %97
         %99 = OpLoad %6 %98
        %100 = OpAccessChain %25 %22 %23 %23
        %101 = OpLoad %6 %100
        %102 = OpINotEqual %73 %99 %101
               OpBranchConditional %102 %90 %92
         %92 = OpLabel
               OpBranch %76
         %76 = OpLabel
        %103 = OpAccessChain %25 %22 %23 %24
        %104 = OpLoad %6 %103
        %106 = OpAccessChain %8 %17 %104
        %107 = OpLoad %7 %106
               OpStore %105 %107
        %108 = OpFunctionCall %2 %11 %105
        %109 = OpLoad %7 %105
        %110 = OpAccessChain %8 %17 %104
               OpStore %110 %109
        %111 = OpLoad %6 %58
        %112 = OpAccessChain %25 %22 %23 %24
        %113 = OpLoad %6 %112
        %114 = OpIEqual %73 %111 %113
               OpSelectionMerge %116 None
               OpBranchConditional %114 %115 %132
        %115 = OpLabel
        %119 = OpAccessChain %25 %22 %23 %24
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %64 %120
        %122 = OpAccessChain %25 %22 %23 %23
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %64 %123
        %125 = OpAccessChain %25 %22 %23 %23
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %64 %126
        %128 = OpAccessChain %25 %22 %23 %24
        %129 = OpLoad %6 %128
        %130 = OpConvertSToF %64 %129
        %131 = OpCompositeConstruct %65 %121 %124 %127 %130
               OpStore %118 %131
               OpBranch %116
        %132 = OpLabel
        %133 = OpAccessChain %25 %22 %23 %23
        %134 = OpLoad %6 %133
        %135 = OpConvertSToF %64 %134
        %136 = OpCompositeConstruct %65 %135 %135 %135 %135
               OpStore %118 %136
               OpBranch %116
        %116 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
               OpReturn
               OpFunctionEnd
