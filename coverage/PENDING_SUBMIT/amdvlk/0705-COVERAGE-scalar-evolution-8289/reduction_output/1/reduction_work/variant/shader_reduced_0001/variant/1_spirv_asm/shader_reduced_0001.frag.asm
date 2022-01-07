; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 95
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %76
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "buf_push"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %28 "buf1"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %39 "a"
               OpName %43 "i"
               OpName %76 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 1
               OpDecorate %76 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeStruct %15
         %21 = OpTypePointer PushConstant %20
         %22 = OpVariable %21 PushConstant
         %23 = OpTypePointer PushConstant %15
         %26 = OpConstant %9 3
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 2
         %52 = OpConstant %15 1
         %74 = OpTypeVector %6 4
         %75 = OpTypePointer Output %74
         %76 = OpVariable %75 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %43 = OpVariable %38 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %23 %22 %16
         %25 = OpLoad %15 %24
         %32 = OpAccessChain %31 %30 %16 %16
         %33 = OpLoad %15 %32
         %35 = OpSGreaterThan %34 %25 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
         %41 = OpAccessChain %31 %30 %16 %40
         %42 = OpLoad %15 %41
               OpStore %39 %42
         %44 = OpAccessChain %31 %30 %16 %16
         %45 = OpLoad %15 %44
               OpStore %43 %45
               OpBranch %46
         %46 = OpLabel
               OpLoopMerge %48 %49 None
               OpBranch %50
         %50 = OpLabel
         %51 = OpLoad %15 %43
         %53 = OpAccessChain %31 %30 %16 %52
         %54 = OpLoad %15 %53
         %55 = OpSLessThan %34 %51 %54
               OpBranchConditional %55 %47 %48
         %47 = OpLabel
         %56 = OpAccessChain %23 %22 %16
         %57 = OpLoad %15 %56
         %58 = OpLoad %15 %39
         %59 = OpIMul %15 %58 %57
               OpStore %39 %59
               OpBranch %49
         %49 = OpLabel
         %60 = OpLoad %15 %43
         %61 = OpIAdd %15 %60 %52
               OpStore %43 %61
               OpBranch %46
         %48 = OpLabel
         %62 = OpLoad %15 %39
         %63 = OpConvertSToF %6 %62
               OpStore %8 %63
               OpBranch %37
         %37 = OpLabel
         %64 = OpLoad %6 %8
         %65 = OpAccessChain %17 %14 %16 %16
         %66 = OpLoad %6 %65
         %67 = OpExtInst %6 %1 FMax %64 %66
               OpStore %8 %67
         %68 = OpLoad %6 %8
         %69 = OpAccessChain %17 %14 %16 %16
         %70 = OpLoad %6 %69
         %71 = OpFOrdEqual %34 %68 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %90
         %72 = OpLabel
         %77 = OpAccessChain %31 %30 %16 %40
         %78 = OpLoad %15 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %31 %30 %16 %16
         %81 = OpLoad %15 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpAccessChain %31 %30 %16 %16
         %84 = OpLoad %15 %83
         %85 = OpConvertSToF %6 %84
         %86 = OpAccessChain %31 %30 %16 %40
         %87 = OpLoad %15 %86
         %88 = OpConvertSToF %6 %87
         %89 = OpCompositeConstruct %74 %79 %82 %85 %88
               OpStore %76 %89
               OpBranch %73
         %90 = OpLabel
         %91 = OpAccessChain %31 %30 %16 %16
         %92 = OpLoad %15 %91
         %93 = OpConvertSToF %6 %92
         %94 = OpCompositeConstruct %74 %93 %93 %93 %93
               OpStore %76 %94
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
