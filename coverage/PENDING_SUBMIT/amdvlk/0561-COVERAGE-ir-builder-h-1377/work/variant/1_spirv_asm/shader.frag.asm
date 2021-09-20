; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 83
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %34 "b"
               OpName %59 "_GLF_color"
               OpName %80 "buf0"
               OpMemberName %80 0 "_GLF_uniform_float_values"
               OpName %82 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %59 Location 0
               OpDecorate %79 ArrayStride 16
               OpMemberDecorate %80 0 Offset 0
               OpDecorate %80 Block
               OpDecorate %82 DescriptorSet 0
               OpDecorate %82 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 5
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %6 3
         %32 = OpTypeBool
         %35 = OpConstant %6 256
         %36 = OpConstant %6 4
         %50 = OpConstant %6 2
         %56 = OpTypeFloat 32
         %57 = OpTypeVector %56 4
         %58 = OpTypePointer Output %57
         %59 = OpVariable %58 Output
         %78 = OpConstant %9 2
         %79 = OpTypeArray %56 %78
         %80 = OpTypeStruct %79
         %81 = OpTypePointer Uniform %80
         %82 = OpVariable %81 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %34 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpAccessChain %17 %14 %15 %21
         %23 = OpLoad %6 %22
               OpStore %20 %23
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpLoad %6 %20
         %30 = OpAccessChain %17 %14 %15 %15
         %31 = OpLoad %6 %30
         %33 = OpSLessThan %32 %29 %31
               OpBranchConditional %33 %25 %26
         %25 = OpLabel
         %37 = OpAccessChain %17 %14 %15 %36
         %38 = OpLoad %6 %37
         %39 = OpISub %6 %35 %38
         %40 = OpExtInst %6 %1 FindSMsb %39
               OpStore %34 %40
         %41 = OpLoad %6 %8
         %42 = OpLoad %6 %34
         %43 = OpIAdd %6 %41 %42
         %44 = OpAccessChain %17 %14 %15 %36
         %45 = OpLoad %6 %44
         %46 = OpISub %6 %43 %45
               OpStore %8 %46
               OpBranch %27
         %27 = OpLabel
         %47 = OpLoad %6 %20
         %48 = OpIAdd %6 %47 %16
               OpStore %20 %48
               OpBranch %24
         %26 = OpLabel
         %49 = OpLoad %6 %8
         %51 = OpAccessChain %17 %14 %15 %50
         %52 = OpLoad %6 %51
         %53 = OpIEqual %32 %49 %52
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %73
         %54 = OpLabel
         %60 = OpAccessChain %17 %14 %15 %36
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %56 %61
         %63 = OpAccessChain %17 %14 %15 %21
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %56 %64
         %66 = OpAccessChain %17 %14 %15 %21
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %56 %67
         %69 = OpAccessChain %17 %14 %15 %36
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %56 %70
         %72 = OpCompositeConstruct %57 %62 %65 %68 %71
               OpStore %59 %72
               OpBranch %55
         %73 = OpLabel
         %74 = OpAccessChain %17 %14 %15 %21
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %56 %75
         %77 = OpCompositeConstruct %57 %76 %76 %76 %76
               OpStore %59 %77
               OpBranch %55
         %55 = OpLabel
               OpReturn
               OpFunctionEnd
