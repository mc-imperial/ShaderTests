; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 64
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %40
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %40 "_GLF_color"
               OpName %42 "buf0"
               OpMemberName %42 0 "_GLF_uniform_int_values"
               OpName %44 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %40 Location 0
               OpDecorate %41 ArrayStride 16
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpConstant %15 1
         %18 = OpTypePointer Uniform %6
         %23 = OpConstant %6 -0
         %25 = OpTypeVector %6 2
         %34 = OpTypeBool
         %38 = OpTypeVector %6 4
         %39 = OpTypePointer Output %38
         %40 = OpVariable %39 Output
         %41 = OpTypeArray %15 %10
         %42 = OpTypeStruct %41
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %45 = OpTypePointer Uniform %15
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
         %21 = OpAccessChain %18 %14 %16 %17
         %22 = OpLoad %6 %21
         %24 = OpFSub %6 %22 %23
         %26 = OpCompositeConstruct %25 %20 %24
         %27 = OpAccessChain %18 %14 %16 %17
         %28 = OpLoad %6 %27
         %29 = OpCompositeConstruct %25 %28 %28
         %30 = OpDot %6 %26 %29
               OpStore %8 %30
         %31 = OpLoad %6 %8
         %32 = OpAccessChain %18 %14 %16 %16
         %33 = OpLoad %6 %32
         %35 = OpFOrdEqual %34 %31 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %59
         %36 = OpLabel
         %46 = OpAccessChain %45 %44 %16 %16
         %47 = OpLoad %15 %46
         %48 = OpConvertSToF %6 %47
         %49 = OpAccessChain %45 %44 %16 %17
         %50 = OpLoad %15 %49
         %51 = OpConvertSToF %6 %50
         %52 = OpAccessChain %45 %44 %16 %17
         %53 = OpLoad %15 %52
         %54 = OpConvertSToF %6 %53
         %55 = OpAccessChain %45 %44 %16 %16
         %56 = OpLoad %15 %55
         %57 = OpConvertSToF %6 %56
         %58 = OpCompositeConstruct %38 %48 %51 %54 %57
               OpStore %40 %58
               OpBranch %37
         %59 = OpLabel
         %60 = OpAccessChain %45 %44 %16 %17
         %61 = OpLoad %15 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpCompositeConstruct %38 %62 %62 %62 %62
               OpStore %40 %63
               OpBranch %37
         %37 = OpLabel
               OpReturn
               OpFunctionEnd
