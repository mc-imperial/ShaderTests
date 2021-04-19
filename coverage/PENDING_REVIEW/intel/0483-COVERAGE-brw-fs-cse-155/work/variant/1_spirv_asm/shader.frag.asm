; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 125
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %106
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v0"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %23 "v1"
               OpName %28 "a"
               OpName %31 "buf1"
               OpMemberName %31 0 "_GLF_uniform_int_values"
               OpName %33 ""
               OpName %47 "c"
               OpName %106 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %30 ArrayStride 16
               OpMemberDecorate %31 0 Offset 0
               OpDecorate %31 Block
               OpDecorate %33 DescriptorSet 0
               OpDecorate %33 Binding 1
               OpDecorate %106 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpConstant %16 1
         %19 = OpTypePointer Uniform %6
         %27 = OpTypePointer Function %16
         %29 = OpConstant %10 4
         %30 = OpTypeArray %16 %29
         %31 = OpTypeStruct %30
         %32 = OpTypePointer Uniform %31
         %33 = OpVariable %32 Uniform
         %34 = OpTypePointer Uniform %16
         %45 = OpTypeBool
         %48 = OpConstant %16 3
         %57 = OpConstant %16 2
         %65 = OpTypePointer Function %6
         %84 = OpConstant %6 3
         %86 = OpConstant %6 1
         %87 = OpConstantComposite %7 %86 %86 %86 %86
         %97 = OpConstant %10 0
        %105 = OpTypePointer Output %7
        %106 = OpVariable %105 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %23 = OpVariable %8 Function
         %28 = OpVariable %27 Function
         %47 = OpVariable %27 Function
         %20 = OpAccessChain %19 %15 %17 %18
         %21 = OpLoad %6 %20
         %22 = OpCompositeConstruct %7 %21 %21 %21 %21
               OpStore %9 %22
         %24 = OpAccessChain %19 %15 %17 %17
         %25 = OpLoad %6 %24
         %26 = OpCompositeConstruct %7 %25 %25 %25 %25
               OpStore %23 %26
         %35 = OpAccessChain %34 %33 %17 %18
         %36 = OpLoad %16 %35
               OpStore %28 %36
               OpBranch %37
         %37 = OpLabel
               OpLoopMerge %39 %40 None
               OpBranch %41
         %41 = OpLabel
         %42 = OpLoad %16 %28
         %43 = OpAccessChain %34 %33 %17 %17
         %44 = OpLoad %16 %43
         %46 = OpSLessThan %45 %42 %44
               OpBranchConditional %46 %38 %39
         %38 = OpLabel
         %49 = OpAccessChain %34 %33 %17 %48
         %50 = OpLoad %16 %49
               OpStore %47 %50
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %55
         %55 = OpLabel
         %56 = OpLoad %16 %47
         %58 = OpAccessChain %34 %33 %17 %57
         %59 = OpLoad %16 %58
         %60 = OpSLessThan %45 %56 %59
               OpBranchConditional %60 %52 %53
         %52 = OpLabel
         %61 = OpLoad %16 %47
         %62 = OpExtInst %16 %1 SClamp %61 %17 %48
         %63 = OpAccessChain %19 %15 %17 %18
         %64 = OpLoad %6 %63
         %66 = OpAccessChain %65 %9 %62
         %67 = OpLoad %6 %66
         %68 = OpFSub %6 %67 %64
         %69 = OpAccessChain %65 %9 %62
               OpStore %69 %68
         %70 = OpAccessChain %34 %33 %17 %18
         %71 = OpLoad %16 %70
         %72 = OpAccessChain %34 %33 %17 %48
         %73 = OpLoad %16 %72
         %74 = OpIEqual %45 %71 %73
               OpSelectionMerge %76 None
               OpBranchConditional %74 %75 %76
         %75 = OpLabel
         %77 = OpLoad %16 %28
         %78 = OpAccessChain %19 %15 %17 %18
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %19 %15 %17 %18
         %81 = OpLoad %6 %80
         %82 = OpAccessChain %19 %15 %17 %18
         %83 = OpLoad %6 %82
         %85 = OpCompositeConstruct %7 %79 %81 %83 %84
         %88 = OpLoad %7 %9
         %89 = OpExtInst %7 %1 SmoothStep %85 %87 %88
         %90 = OpLoad %16 %28
         %91 = OpVectorExtractDynamic %6 %89 %90
         %92 = OpAccessChain %65 %23 %77
               OpStore %92 %91
               OpBranch %76
         %76 = OpLabel
               OpBranch %54
         %54 = OpLabel
         %93 = OpLoad %16 %47
         %94 = OpIAdd %16 %93 %18
               OpStore %47 %94
               OpBranch %51
         %53 = OpLabel
               OpBranch %40
         %40 = OpLabel
         %95 = OpLoad %16 %28
         %96 = OpIAdd %16 %95 %18
               OpStore %28 %96
               OpBranch %37
         %39 = OpLabel
         %98 = OpAccessChain %65 %23 %97
         %99 = OpLoad %6 %98
        %100 = OpAccessChain %19 %15 %17 %17
        %101 = OpLoad %6 %100
        %102 = OpFOrdEqual %45 %99 %101
               OpSelectionMerge %104 None
               OpBranchConditional %102 %103 %120
        %103 = OpLabel
        %107 = OpAccessChain %34 %33 %17 %18
        %108 = OpLoad %16 %107
        %109 = OpConvertSToF %6 %108
        %110 = OpAccessChain %34 %33 %17 %48
        %111 = OpLoad %16 %110
        %112 = OpConvertSToF %6 %111
        %113 = OpAccessChain %34 %33 %17 %48
        %114 = OpLoad %16 %113
        %115 = OpConvertSToF %6 %114
        %116 = OpAccessChain %34 %33 %17 %18
        %117 = OpLoad %16 %116
        %118 = OpConvertSToF %6 %117
        %119 = OpCompositeConstruct %7 %109 %112 %115 %118
               OpStore %106 %119
               OpBranch %104
        %120 = OpLabel
        %121 = OpAccessChain %34 %33 %17 %48
        %122 = OpLoad %16 %121
        %123 = OpConvertSToF %6 %122
        %124 = OpCompositeConstruct %7 %123 %123 %123 %123
               OpStore %106 %124
               OpBranch %104
        %104 = OpLabel
               OpReturn
               OpFunctionEnd
