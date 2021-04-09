; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 101
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %82
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %12 "f"
               OpName %16 "buf1"
               OpMemberName %16 0 "_GLF_uniform_float_values"
               OpName %18 ""
               OpName %23 "r"
               OpName %26 "buf0"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %47 "buf2"
               OpMemberName %47 0 "injectionSwitch"
               OpName %49 ""
               OpName %82 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 1
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 0
               OpMemberDecorate %47 0 Offset 0
               OpDecorate %47 Block
               OpDecorate %49 DescriptorSet 0
               OpDecorate %49 Binding 2
               OpDecorate %82 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypePointer Function %10
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 2
         %15 = OpTypeArray %10 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpTypePointer Uniform %10
         %22 = OpTypePointer Function %6
         %24 = OpConstant %13 3
         %25 = OpTypeArray %6 %24
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpConstant %6 1
         %30 = OpTypePointer Uniform %6
         %39 = OpConstant %6 2
         %42 = OpTypeBool
         %46 = OpTypeVector %10 2
         %47 = OpTypeStruct %46
         %48 = OpTypePointer Uniform %47
         %49 = OpVariable %48 Uniform
         %50 = OpTypePointer Uniform %46
         %54 = OpConstant %13 1
         %66 = OpConstant %6 100
         %80 = OpTypeVector %10 4
         %81 = OpTypePointer Output %80
         %82 = OpVariable %81 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %23 = OpVariable %22 Function
               OpStore %8 %9
         %20 = OpAccessChain %19 %18 %9 %9
         %21 = OpLoad %10 %20
               OpStore %12 %21
         %31 = OpAccessChain %30 %28 %9 %29
         %32 = OpLoad %6 %31
               OpStore %23 %32
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %37
         %37 = OpLabel
         %38 = OpLoad %6 %23
         %40 = OpAccessChain %30 %28 %9 %39
         %41 = OpLoad %6 %40
         %43 = OpSLessThan %42 %38 %41
               OpBranchConditional %43 %34 %35
         %34 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpIAdd %6 %44 %29
               OpStore %8 %45
         %51 = OpAccessChain %50 %49 %9
         %52 = OpLoad %46 %51
         %53 = OpDPdx %46 %52
         %55 = OpCompositeExtract %10 %53 1
         %56 = OpLoad %10 %12
         %57 = OpFAdd %10 %56 %55
               OpStore %12 %57
               OpBranch %36
         %36 = OpLabel
         %58 = OpLoad %6 %23
         %59 = OpIAdd %6 %58 %29
               OpStore %23 %59
               OpBranch %33
         %35 = OpLabel
               OpBranch %60
         %60 = OpLabel
               OpLoopMerge %62 %63 None
               OpBranch %64
         %64 = OpLabel
         %65 = OpLoad %6 %8
         %67 = OpSLessThan %42 %65 %66
               OpBranchConditional %67 %61 %62
         %61 = OpLabel
         %68 = OpLoad %6 %8
         %69 = OpIAdd %6 %68 %29
               OpStore %8 %69
         %70 = OpAccessChain %19 %18 %9 %9
         %71 = OpLoad %10 %70
         %72 = OpLoad %10 %12
         %73 = OpFAdd %10 %72 %71
               OpStore %12 %73
               OpBranch %63
         %63 = OpLabel
               OpBranch %60
         %62 = OpLabel
         %74 = OpLoad %10 %12
         %75 = OpAccessChain %19 %18 %9 %29
         %76 = OpLoad %10 %75
         %77 = OpFOrdEqual %42 %74 %76
               OpSelectionMerge %79 None
               OpBranchConditional %77 %78 %96
         %78 = OpLabel
         %83 = OpAccessChain %30 %28 %9 %9
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %10 %84
         %86 = OpAccessChain %30 %28 %9 %29
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %10 %87
         %89 = OpAccessChain %30 %28 %9 %29
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %10 %90
         %92 = OpAccessChain %30 %28 %9 %9
         %93 = OpLoad %6 %92
         %94 = OpConvertSToF %10 %93
         %95 = OpCompositeConstruct %80 %85 %88 %91 %94
               OpStore %82 %95
               OpBranch %79
         %96 = OpLabel
         %97 = OpAccessChain %30 %28 %9 %29
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %10 %98
        %100 = OpCompositeConstruct %80 %99 %99 %99 %99
               OpStore %82 %100
               OpBranch %79
         %79 = OpLabel
               OpReturn
               OpFunctionEnd
