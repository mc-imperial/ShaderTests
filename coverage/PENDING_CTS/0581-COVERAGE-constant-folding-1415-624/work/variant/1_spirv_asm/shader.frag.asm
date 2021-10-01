; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 141
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %44 %51
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func0(vf4;"
               OpName %10 "x"
               OpName %14 "func1("
               OpName %18 "i"
               OpName %22 "buf1"
               OpMemberName %22 0 "_GLF_uniform_int_values"
               OpName %24 ""
               OpName %42 "v"
               OpName %44 "_GLF_color"
               OpName %51 "gl_FragCoord"
               OpName %58 "buf0"
               OpMemberName %58 0 "_GLF_uniform_float_values"
               OpName %60 ""
               OpName %93 "v"
               OpName %104 "i"
               OpName %118 "param"
               OpName %120 "indexable"
               OpName %132 "indexable"
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 1
               OpDecorate %44 Location 0
               OpDecorate %51 BuiltIn FragCoord
               OpDecorate %57 ArrayStride 16
               OpMemberDecorate %58 0 Offset 0
               OpDecorate %58 Block
               OpDecorate %60 DescriptorSet 0
               OpDecorate %60 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %2 %8
         %13 = OpTypeFunction %7
         %16 = OpTypeInt 32 1
         %17 = OpTypePointer Function %16
         %19 = OpTypeInt 32 0
         %20 = OpConstant %19 2
         %21 = OpTypeArray %16 %20
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpConstant %16 0
         %26 = OpTypePointer Uniform %16
         %40 = OpTypeBool
         %43 = OpTypePointer Output %7
         %44 = OpVariable %43 Output
         %47 = OpConstant %16 1
         %50 = OpTypePointer Input %7
         %51 = OpVariable %50 Input
         %52 = OpConstant %19 0
         %53 = OpTypePointer Input %6
         %56 = OpConstant %19 3
         %57 = OpTypeArray %6 %56
         %58 = OpTypeStruct %57
         %59 = OpTypePointer Uniform %58
         %60 = OpVariable %59 Uniform
         %61 = OpTypePointer Uniform %6
         %76 = OpTypePointer Function %6
         %94 = OpConstant %16 2
        %111 = OpConstant %16 3
        %113 = OpTypeArray %7 %56
        %114 = OpConstant %6 1
        %115 = OpConstantComposite %7 %114 %114 %114 %114
        %116 = OpConstantComposite %113 %115 %115 %115
        %119 = OpTypePointer Function %113
        %124 = OpConstant %19 5
        %125 = OpTypeArray %7 %124
        %126 = OpConstant %6 0
        %127 = OpConstantComposite %7 %114 %126 %126 %114
        %128 = OpConstantComposite %125 %115 %127 %115 %115 %115
        %131 = OpTypePointer Function %125
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %140 = OpFunctionCall %7 %14
               OpStore %44 %140
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
         %18 = OpVariable %17 Function
         %42 = OpVariable %8 Function
         %27 = OpAccessChain %26 %24 %25 %25
         %28 = OpLoad %16 %27
         %29 = OpAccessChain %26 %24 %25 %25
         %30 = OpLoad %16 %29
         %31 = OpShiftLeftLogical %16 %28 %30
               OpStore %18 %31
               OpBranch %32
         %32 = OpLabel
               OpLoopMerge %34 %35 None
               OpBranch %36
         %36 = OpLabel
         %37 = OpLoad %16 %18
         %38 = OpAccessChain %26 %24 %25 %25
         %39 = OpLoad %16 %38
         %41 = OpINotEqual %40 %37 %39
               OpBranchConditional %41 %33 %34
         %33 = OpLabel
         %45 = OpLoad %7 %44
               OpStore %42 %45
               OpBranch %35
         %35 = OpLabel
         %46 = OpLoad %16 %18
         %48 = OpISub %16 %46 %47
               OpStore %18 %48
               OpBranch %32
         %34 = OpLabel
         %49 = OpLoad %7 %42
               OpStore %44 %49
         %54 = OpAccessChain %53 %51 %52
         %55 = OpLoad %6 %54
         %62 = OpAccessChain %61 %60 %25 %25
         %63 = OpLoad %6 %62
         %64 = OpFOrdLessThan %40 %55 %63
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %66
         %65 = OpLabel
               OpReturn
         %66 = OpLabel
         %68 = OpAccessChain %53 %51 %52
         %69 = OpLoad %6 %68
         %70 = OpAccessChain %61 %60 %25 %25
         %71 = OpLoad %6 %70
         %72 = OpFOrdLessThan %40 %69 %71
               OpSelectionMerge %74 None
               OpBranchConditional %72 %73 %74
         %73 = OpLabel
               OpKill
         %74 = OpLabel
         %77 = OpAccessChain %76 %10 %52
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %61 %60 %25 %25
         %80 = OpLoad %6 %79
         %81 = OpFOrdGreaterThan %40 %78 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %83
         %82 = OpLabel
         %84 = OpAccessChain %26 %24 %25 %25
         %85 = OpLoad %16 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpCompositeConstruct %7 %86 %86 %86 %86
               OpStore %44 %87
               OpReturn
         %83 = OpLabel
         %89 = OpAccessChain %26 %24 %25 %47
         %90 = OpLoad %16 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpCompositeConstruct %7 %91 %91 %91 %91
               OpStore %44 %92
               OpReturn
               OpFunctionEnd
         %14 = OpFunction %7 None %13
         %15 = OpLabel
         %93 = OpVariable %8 Function
        %104 = OpVariable %17 Function
        %118 = OpVariable %8 Function
        %120 = OpVariable %119 Function
        %132 = OpVariable %131 Function
         %95 = OpAccessChain %61 %60 %25 %94
         %96 = OpLoad %6 %95
         %97 = OpAccessChain %61 %60 %25 %47
         %98 = OpLoad %6 %97
         %99 = OpAccessChain %61 %60 %25 %94
        %100 = OpLoad %6 %99
        %101 = OpAccessChain %61 %60 %25 %94
        %102 = OpLoad %6 %101
        %103 = OpCompositeConstruct %7 %96 %98 %100 %102
               OpStore %93 %103
               OpStore %104 %25
               OpBranch %105
        %105 = OpLabel
               OpLoopMerge %107 %108 None
               OpBranch %109
        %109 = OpLabel
        %110 = OpLoad %16 %104
        %112 = OpSLessThan %40 %110 %111
               OpBranchConditional %112 %106 %107
        %106 = OpLabel
        %117 = OpLoad %16 %104
               OpStore %120 %116
        %121 = OpAccessChain %8 %120 %117
        %122 = OpLoad %7 %121
               OpStore %118 %122
        %123 = OpFunctionCall %2 %11 %118
        %129 = OpAccessChain %26 %24 %25 %25
        %130 = OpLoad %16 %129
               OpStore %132 %128
        %133 = OpAccessChain %8 %132 %130
        %134 = OpLoad %7 %133
               OpStore %93 %134
               OpBranch %108
        %108 = OpLabel
        %135 = OpLoad %16 %104
        %136 = OpIAdd %16 %135 %47
               OpStore %104 %136
               OpBranch %105
        %107 = OpLabel
        %137 = OpLoad %7 %93
               OpReturnValue %137
               OpFunctionEnd
