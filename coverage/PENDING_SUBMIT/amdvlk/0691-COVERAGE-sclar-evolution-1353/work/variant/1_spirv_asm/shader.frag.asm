; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 137
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %118
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data"
               OpName %11 "func0(struct-S-i11;"
               OpName %10 "s"
               OpName %14 "func1("
               OpName %20 "arr"
               OpName %43 "i"
               OpName %54 "buf0"
               OpMemberName %54 0 "_GLF_uniform_int_values"
               OpName %56 ""
               OpName %64 "index"
               OpName %67 "i"
               OpName %102 "param"
               OpName %118 "_GLF_color"
               OpDecorate %53 ArrayStride 16
               OpMemberDecorate %54 0 Offset 0
               OpDecorate %54 Block
               OpDecorate %56 DescriptorSet 0
               OpDecorate %56 Binding 0
               OpDecorate %118 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %2 %8
         %13 = OpTypeFunction %6
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 10
         %18 = OpTypeArray %7 %17
         %19 = OpTypePointer Private %18
         %20 = OpVariable %19 Private
         %21 = OpConstant %6 0
         %22 = OpConstantComposite %7 %21
         %23 = OpConstant %6 1
         %24 = OpConstantComposite %7 %23
         %25 = OpConstant %6 2
         %26 = OpConstantComposite %7 %25
         %27 = OpConstant %6 3
         %28 = OpConstantComposite %7 %27
         %29 = OpConstant %6 4
         %30 = OpConstantComposite %7 %29
         %31 = OpConstant %6 5
         %32 = OpConstantComposite %7 %31
         %33 = OpConstant %6 6
         %34 = OpConstantComposite %7 %33
         %35 = OpConstant %6 7
         %36 = OpConstantComposite %7 %35
         %37 = OpConstant %6 8
         %38 = OpConstantComposite %7 %37
         %39 = OpConstant %6 9
         %40 = OpConstantComposite %7 %39
         %41 = OpConstantComposite %18 %22 %24 %26 %28 %30 %32 %34 %36 %38 %40
         %42 = OpTypePointer Function %6
         %50 = OpTypeBool
         %52 = OpConstant %16 3
         %53 = OpTypeArray %6 %52
         %54 = OpTypeStruct %53
         %55 = OpTypePointer Uniform %54
         %56 = OpVariable %55 Uniform
         %57 = OpTypePointer Uniform %6
         %80 = OpTypePointer Private %6
        %103 = OpTypePointer Private %7
        %115 = OpTypeFloat 32
        %116 = OpTypeVector %115 4
        %117 = OpTypePointer Output %116
        %118 = OpVariable %117 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %102 = OpVariable %8 Function
               OpStore %20 %41
        %100 = OpAccessChain %57 %56 %21 %21
        %101 = OpLoad %6 %100
        %104 = OpAccessChain %103 %20 %101
        %105 = OpLoad %7 %104
               OpStore %102 %105
        %106 = OpFunctionCall %2 %11 %102
        %107 = OpLoad %7 %102
        %108 = OpAccessChain %103 %20 %101
               OpStore %108 %107
        %109 = OpFunctionCall %6 %14
        %110 = OpAccessChain %57 %56 %21 %21
        %111 = OpLoad %6 %110
        %112 = OpIEqual %50 %109 %111
               OpSelectionMerge %114 None
               OpBranchConditional %112 %113 %132
        %113 = OpLabel
        %119 = OpAccessChain %57 %56 %21 %21
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %115 %120
        %122 = OpAccessChain %57 %56 %21 %23
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %115 %123
        %125 = OpAccessChain %57 %56 %21 %23
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %115 %126
        %128 = OpAccessChain %57 %56 %21 %21
        %129 = OpLoad %6 %128
        %130 = OpConvertSToF %115 %129
        %131 = OpCompositeConstruct %116 %121 %124 %127 %130
               OpStore %118 %131
               OpBranch %114
        %132 = OpLabel
        %133 = OpAccessChain %57 %56 %21 %23
        %134 = OpLoad %6 %133
        %135 = OpConvertSToF %115 %134
        %136 = OpCompositeConstruct %116 %135 %135 %135 %135
               OpStore %118 %136
               OpBranch %114
        %114 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
         %43 = OpVariable %42 Function
               OpStore %43 %23
               OpBranch %44
         %44 = OpLabel
               OpLoopMerge %46 %47 None
               OpBranch %48
         %48 = OpLabel
         %49 = OpLoad %6 %43
         %51 = OpSGreaterThan %50 %49 %21
               OpBranchConditional %51 %45 %46
         %45 = OpLabel
         %58 = OpAccessChain %57 %56 %21 %21
         %59 = OpLoad %6 %58
         %60 = OpSNegate %6 %59
         %61 = OpAccessChain %42 %10 %21
               OpStore %61 %60
               OpBranch %47
         %47 = OpLabel
         %62 = OpLoad %6 %43
         %63 = OpISub %6 %62 %23
               OpStore %43 %63
               OpBranch %44
         %46 = OpLabel
               OpReturn
               OpFunctionEnd
         %14 = OpFunction %6 None %13
         %15 = OpLabel
         %64 = OpVariable %42 Function
         %67 = OpVariable %42 Function
         %65 = OpAccessChain %57 %56 %21 %23
         %66 = OpLoad %6 %65
               OpStore %64 %66
         %68 = OpAccessChain %57 %56 %21 %23
         %69 = OpLoad %6 %68
               OpStore %67 %69
               OpBranch %70
         %70 = OpLabel
               OpLoopMerge %72 %73 None
               OpBranch %74
         %74 = OpLabel
         %75 = OpLoad %6 %67
         %76 = OpAccessChain %57 %56 %21 %25
         %77 = OpLoad %6 %76
         %78 = OpSLessThan %50 %75 %77
               OpBranchConditional %78 %71 %72
         %71 = OpLabel
         %79 = OpLoad %6 %64
         %81 = OpAccessChain %80 %20 %79 %21
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %57 %56 %21 %21
         %84 = OpLoad %6 %83
         %85 = OpSNegate %6 %84
         %86 = OpIEqual %50 %82 %85
               OpSelectionMerge %88 None
               OpBranchConditional %86 %87 %88
         %87 = OpLabel
         %89 = OpAccessChain %57 %56 %21 %21
         %90 = OpLoad %6 %89
               OpReturnValue %90
         %88 = OpLabel
         %92 = OpAccessChain %57 %56 %21 %21
         %93 = OpLoad %6 %92
               OpStore %64 %93
               OpBranch %73
         %73 = OpLabel
         %94 = OpLoad %6 %67
         %95 = OpIAdd %6 %94 %23
               OpStore %67 %95
               OpBranch %70
         %72 = OpLabel
         %96 = OpAccessChain %57 %56 %21 %23
         %97 = OpLoad %6 %96
               OpReturnValue %97
               OpFunctionEnd
